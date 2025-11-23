import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

// ------------ ZOD VALIDATION ------------
const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
  recaptcha: z.string().optional(),
});

// ------------ RATE LIMIT ------------
let lastSent = 0;
const RATE_LIMIT_MS = 5000;

// ------------ VERIFY RECAPTCHA ------------
async function verifyRecaptcha(token: string | undefined) {
  if (!token) return false;

  const secret = process.env.RECAPTCHA_SECRET_KEY!;
  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: Request) {
  try {
    const now = Date.now();
    if (now - lastSent < RATE_LIMIT_MS) {
      return NextResponse.json({ error: "Please wait before sending again." }, { status: 429 });
    }
    lastSent = now;

    const body = await req.json();
    const parsed = FormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const { name, email, message, phone, recaptcha } = parsed.data;

    // --- Verify CAPTCHA ---
    const isHuman = await verifyRecaptcha(recaptcha);
    if (!isHuman) {
      return NextResponse.json({ error: "reCAPTCHA failed. Try again." }, { status: 400 });
    }

    // ------------- ADMIN EMAIL (to you) -------------
    const adminHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7fb;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #eee;">
          
          <h2 style="margin-bottom: 10px; color: #2a2a2a;">📩 New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Message:</strong></p>
          <div style="background:#f1f1ff;padding:15px;border-radius:8px;border-left:4px solid #4A48FF;color:#333;">
            ${message}
          </div>

          <p style="font-size: 14px; color: #888; margin-top: 30px;">Sent from Circum Centric Website</p>
        </div>
      </div>
    `;

    // ------------- USER CONFIRMATION EMAIL -------------
    const userHTML = `
      <div style="font-family: Arial, sans-serif; background: #f4f4ff; padding: 20px;">
        <div style="max-width: 600px; background: white; margin: 0 auto; padding: 30px; border-radius: 12px; border: 1px solid #ddd;">
          
          <h2 style="color:#4A48FF;margin-bottom:10px;">Thank You for Contacting Us, ${name}!</h2>

          <p>We've received your message and will reply soon.</p>

          <h3>Your Message</h3>
          <div style="background:#f7f7ff;padding:15px;border-radius:10px;border-left:4px solid #4A48FF;">
            ${message}
          </div>

          <p style="margin-top:25px;color:#555;">You can reply directly to this email.</p>
        </div>
      </div>
    `;

    // SEND TO YOU
    await resend.emails.send({
      from: "Circum Centric <onboarding@resend.dev>",
      to: "foreshubham@gmail.com",
      subject: `New Contact from ${name}`,
      html: adminHTML,
    });

    // SEND TO USER
    await resend.emails.send({
      from: "Circum Centric <onboarding@resend.dev>",
      to: email,
      subject: "We received your message!",
      html: userHTML,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
