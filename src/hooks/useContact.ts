"use client";

import { useState, useCallback } from "react";

/*
  Contact-form submission state machine:

  idle ──submit──▶ submitting ──ok──▶ success
   ▲                   │                  │
   │              fail │                  │
   │                   ▼                  │
   │                 error                │
   └───────────────────┴──────reset───────┘
*/

type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseContactReturn {
  readonly status: SubmitStatus;
  readonly fieldErrors: Record<string, string>;
  readonly serverError: string;
  readonly submit: (payload: Record<string, string>) => Promise<void>;
  readonly setFieldErrors: (errors: Record<string, string>) => void;
  readonly reset: () => void;
}

export function useContact(): UseContactReturn {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  const submit = useCallback(async (payload: Record<string, string>) => {
    setFieldErrors({});
    setServerError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (json.fieldErrors) {
          setFieldErrors(json.fieldErrors);
          setStatus("idle");
        } else {
          setServerError(json.error ?? "");
          setStatus("error");
        }
        return;
      }

      setStatus("success");
    } catch {
      setServerError("network");
      setStatus("error");
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setFieldErrors({});
    setServerError("");
  }, []);

  return { status, fieldErrors, serverError, submit, setFieldErrors, reset };
}
