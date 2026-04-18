import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email/resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }
  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact email failed", err);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
