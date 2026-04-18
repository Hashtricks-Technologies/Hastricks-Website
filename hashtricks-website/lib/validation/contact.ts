import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  company: z.string().max(100).optional(),
  service: z.string().min(1, "Pick a service"),
  message: z
    .string()
    .min(10, "Tell us a little more (10+ characters)")
    .max(2000, "Please keep it under 2000 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactInput = z.infer<typeof contactSchema>;
