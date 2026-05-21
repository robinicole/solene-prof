import { z } from "zod";
import { COURSES } from "@/data/courses";

const courseIds: string[] = COURSES.map((c) => c.id);
const formatValues = ["", "either", "in-person", "online"];

/**
 * Contact-form schema. Email is the only required field; everything else is
 * gently suggested. Format errors (bad email) block submission; empty fields
 * never do.
 */
export const contactSchema = z.object({
  course: z
    .string()
    .optional()
    .default("")
    .refine(
      (v) => v === "" || v === "other" || courseIds.includes(v),
      "Cours invalide"
    ),
  level: z.string().max(200, "Champ trop long").optional().default(""),
  format: z
    .string()
    .optional()
    .default("")
    .refine((v) => formatValues.includes(v), "Format invalide"),
  name: z.string().max(200, "Nom trop long").optional().default(""),
  email: z
    .string()
    .min(1, "L'adresse email est obligatoire")
    .refine(
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Adresse email invalide"
    ),
  message: z.string().max(3000, "Message trop long").optional().default(""),
  locale: z.string().max(5).optional().default(""),
  honeypot: z.string().max(0, "").optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Fields gently suggested (never required). Keys match the dictionary. */
export const SUGGESTED_FIELDS = ["course", "name", "level"] as const;
export type SuggestedField = (typeof SUGGESTED_FIELDS)[number];

export function getMissingFields(
  form: Record<string, string>
): readonly SuggestedField[] {
  return SUGGESTED_FIELDS.filter(
    (key) => !form[key] || form[key].trim() === ""
  );
}

export function getFieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !(field in errors)) {
      errors[field] = issue.message;
    }
  }
  return errors;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lightweight client-side email check so error messages can be localised. */
export function emailError(
  value: string
): "required" | "invalid" | null {
  if (!value || value.trim() === "") return "required";
  if (!EMAIL_RE.test(value.trim())) return "invalid";
  return null;
}
