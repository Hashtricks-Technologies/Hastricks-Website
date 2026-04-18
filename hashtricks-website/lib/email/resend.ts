import { Resend } from "resend";
import { company } from "@/lib/data/company";
import type { ContactInput } from "@/lib/validation/contact";

export async function sendContactEmail(input: ContactInput) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;
  return resend.emails.send({
    from: "Hashtricks Site <noreply@hashtrickstechnologies.com>",
    to,
    replyTo: input.email,
    subject: `New enquiry — ${input.service} — ${input.name}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Company: ${input.company ?? "—"}`,
      `Service: ${input.service}`,
      "",
      "Message:",
      input.message,
    ].join("\n"),
  });
}
