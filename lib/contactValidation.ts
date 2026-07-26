export interface ContactFormData {
  from_name: string;
  from_email: string;
  message: string;
}

export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  message: 2000,
} as const;

export type ContactValidationResult =
  | { ok: true; data: ContactFormData }
  | { ok: false; reason: "required" | "invalid" | "tooLong" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;
const MESSAGE_CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

export function validateContactForm(
  input: ContactFormData,
): ContactValidationResult {
  const data = {
    from_name: input.from_name.trim(),
    from_email: input.from_email.trim(),
    message: input.message.trim(),
  };

  if (!data.from_name || !data.from_email || !data.message) {
    return { ok: false, reason: "required" };
  }

  if (
    data.from_name.length > CONTACT_LIMITS.name ||
    data.from_email.length > CONTACT_LIMITS.email ||
    data.message.length > CONTACT_LIMITS.message
  ) {
    return { ok: false, reason: "tooLong" };
  }

  if (
    !EMAIL_PATTERN.test(data.from_email) ||
    HEADER_CONTROL_CHARACTERS.test(data.from_name) ||
    HEADER_CONTROL_CHARACTERS.test(data.from_email) ||
    MESSAGE_CONTROL_CHARACTERS.test(data.message)
  ) {
    return { ok: false, reason: "invalid" };
  }

  return { ok: true, data };
}
