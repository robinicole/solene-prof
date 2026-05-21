import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, getFieldErrors } from "@/lib/validation";
import { COURSES } from "@/data/courses";

export const maxDuration = 10;

/*
  Request pipeline:
  POST body → parse JSON → Zod validate → honeypot → Turnstile → send email → respond
       │           │             │            │           │            │
       ▼           ▼             ▼            ▼           ▼            ▼
   [malformed]  [invalid]   [bot: silent]  [bot: 403]  [send err]   [200 OK]
     → 400       → 400        → 200          → 403        → 502
*/

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Not configured, skip (dev mode).
  if (!token) return false;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      }
    );
    const result = await response.json();
    return result.success === true;
  } catch {
    console.error("[contact] Turnstile verification failed");
    return false;
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:8px;font-weight:bold;vertical-align:top;">${label}</td><td style="padding:8px;">${value}</td></tr>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "generic" },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: "generic",
        fieldErrors: getFieldErrors(result.error),
      },
      { status: 400 }
    );
  }

  const data = result.data;

  // Honeypot: if filled, silently accept (bots think it worked).
  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ success: true });
  }

  const turnstileValid = await verifyTurnstile(data.turnstileToken);
  if (!turnstileValid) {
    return NextResponse.json(
      { success: false, error: "captcha" },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json(
      { success: false, error: "generic" },
      { status: 500 }
    );
  }

  const course = COURSES.find((c) => c.id === data.course);
  const courseLabel = course
    ? course.fr.title
    : data.course === "other"
      ? "Autre / non précisé"
      : "Non précisé";
  const formatLabel =
    data.format === "in-person"
      ? "En personne"
      : data.format === "online"
        ? "En ligne"
        : data.format === "either"
          ? "Peu importe"
          : "Non précisé";
  const langLabel = data.locale === "en" ? "Anglais" : "Français";

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Cours de francais <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@solenelanza.com";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email || undefined,
      subject: `Nouvelle demande de cours${data.name ? ` : ${data.name}` : ""}`,
      html: `
        <h2 style="font-family:Georgia,serif;">Nouvelle demande de cours</h2>
        <table style="border-collapse:collapse;width:100%;max-width:560px;font-family:Arial,sans-serif;">
          ${row("Cours", escapeHtml(courseLabel))}
          ${row("Niveau / classe", data.level ? escapeHtml(data.level) : "Non précisé")}
          ${row("Format", formatLabel)}
          ${row("Nom", data.name ? escapeHtml(data.name) : "Non précisé")}
          ${row("Email", escapeHtml(data.email))}
          ${data.message ? row("Message", escapeHtml(data.message).replace(/\n/g, "<br>")) : ""}
          ${row("Langue de la demande", langLabel)}
        </table>
      `,
    });

    if (error) {
      console.error("[contact] Resend rejected:", error);
      return NextResponse.json(
        { success: false, error: "generic" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Resend threw:", error);
    return NextResponse.json(
      { success: false, error: "generic" },
      { status: 502 }
    );
  }
}
