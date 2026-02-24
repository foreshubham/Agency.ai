import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

// ZOD validation for contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message is too short"),
  service: z.string().optional(),
});

// ZOD validation for newsletter subscription
const NewsletterSchema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(2).optional(),
});

// Simple rate limit
let lastSent = 0;
const RATE_LIMIT_MS = 5000;

// Common footer HTML
const footerHTML = `
  <div style="background:#e4e6fb; padding: 24px 20px; text-align: center; font-size: 14px; color: #666;">
    <img src="https://circumcentric.com/logo.png" alt="Circumcentric Logo" width="100" style="margin-bottom: 16px;" />
    <p style="margin: 4px 0;">Circumcentric – Digital Agency</p>
    <p style="margin: 4px 0;">hello@circumcentric.com | +1 234 567 8901</p>
    <p style="margin: 16px 0 0 0;">
      <a href="https://circumcentric.com" style="color: #4A48FF; text-decoration: none; margin: 0 8px;">Website</a> | 
      <a href="https://twitter.com/circumcentric" style="color: #4A48FF; text-decoration: none; margin: 0 8px;">Twitter</a> | 
      <a href="https://linkedin.com/company/circumcentric" style="color: #4A48FF; text-decoration: none; margin: 0 8px;">LinkedIn</a>
    </p>
    <p style="font-size: 12px; color: #aaa; margin-top: 20px;">
      You are receiving this email because you contacted or subscribed to Circumcentric.<br />
      If this wasn’t you, please ignore this message.
    </p>
  </div>
`;

// Contact email templates
const contactAdminHTML = ({ name, email, phone, service, message }: any) => `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background:#f0f1f7; padding:40px 0;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background:#4A48FF; padding:40px 20px; text-align:center;">
        <img src="https://circumcentric.com/logo.png" alt="Circumcentric Logo" width="160" style="margin:0 auto 24px;" />
        <h1 style="color:#fff; font-size:28px; margin:0; font-weight:700;">New Contact Form Submission</h1>
        <p style="color:#cbd2ff; font-size:16px; margin:8px 0 0;">
          Circumcentric – Digital Agency
        </p>
      </div>
      <div style="padding:32px 24px; color:#2a2a2a; font-size:16px; line-height:1.6;">
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        ${service ? `<p><strong>Service Interested:</strong> ${service}</p>` : ""}
        <h2>Message</h2>
        <div style="background:#f1f1ff; padding:15px; border-radius:8px; border-left:4px solid #4A48FF;">
          ${message}
        </div>
      </div>
      ${footerHTML}
    </div>
  </div>
`;

const contactUserHTML = ({ name, service, message }: any) => `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background:#f0f1f7; padding:40px 0;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background:#4A48FF; padding:40px 20px; text-align:center;">
        <img src="https://circumcentric.com/logo.png" alt="Circumcentric Logo" width="160" style="margin:0 auto 24px;" />
        <h1 style="color:#fff; font-size:28px; margin:0; font-weight:700;">Thank You, ${name}!</h1>
        <p style="color:#cbd2ff; font-size:16px; margin:8px 0 0;">Your message has been received</p>
      </div>
      <div style="padding:32px 24px; color:#2a2a2a; font-size:16px; line-height:1.6;">
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>Circumcentric</strong>. We’ve received your message and will get back to you shortly.</p>
        ${service ? `<p><strong>Service Interested:</strong> ${service}</p>` : ""}
        <h2>Your Message</h2>
        <div style="background:#f1f1ff; padding:15px; border-radius:8px; border-left:4px solid #4A48FF;">
          ${message}
        </div>
        <p style="margin-top:20px;">If you need immediate assistance, reply to this email or call us at <strong>+1 234 567 8901</strong>.</p>
      </div>
      ${footerHTML}
    </div>
  </div>
`;

// Newsletter subscription email templates
const newsletterUserHTML = (name: string, email: string) => `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background:#f0f1f7; padding:40px 0;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:16px; box-shadow:0 4px 16px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background:#4A48FF; padding:40px 20px; text-align:center; position: relative;">
        <img src="https://circumcentric.com/logo.png" alt="Circumcentric Logo" width="160" style="margin:0 auto 24px;" />
        <h1 style="color:#fff; font-size:28px; margin:0; font-weight:700;">Confirm Your Subscription</h1>
        <p style="color:#cbd2ff; font-size:16px; margin:8px 0 0; max-width:360px; margin-left:auto; margin-right:auto;">
          You're almost there, ${name || email}! Please confirm your subscription to receive the latest updates and exclusive offers.
        </p>
      </div>
      <div style="padding:32px 24px; color:#2a2a2a; font-size:16px; line-height:1.6; text-align:center;">
        <p>
          Thanks for signing up to Circumcentric’s newsletter. To complete your subscription, please click the button below.
        </p>
        <a href="https://circumcentric.com/confirm-subscription"
          style="display: inline-block; background: #4A48FF; color: #fff; padding: 16px 28px; border-radius: 12px; text-decoration: none; font-weight: 600; margin: 24px 0; box-shadow: 0 6px 12px rgb(74 72 255 / 0.4); transition: background-color 0.3s ease;">
          Confirm Subscription
        </a>
        <p style="font-size: 14px; color: #888;">
          If you didn’t subscribe, you can safely ignore this email.
        </p>
      </div>
      ${footerHTML}
    </div>
  </div>
`;

// API handler
export async function POST(req: Request) {
  try {
    const now = Date.now();
    if (now - lastSent < RATE_LIMIT_MS) {
      return NextResponse.json({ error: "Please wait before sending again." }, { status: 429 });
    }
    lastSent = now;

    const body = await req.json();

    // Detect if newsletter or contact based on fields
    if ("message" in body) {
      // Contact form submission
      const parsed = ContactFormSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
      }

      const { name, email, phone, message, service } = parsed.data;

      // Send emails
      await resend.emails.send({
        from: "Circumcentric <hello@circumcentric.com>",
        to: "hello@circumcentric.com",
        subject: `New Contact from ${name}`,
        html: contactAdminHTML({ name, email, phone, service, message }),
      });

      await resend.emails.send({
        from: "Circumcentric <hello@circumcentric.com>",
        to: email,
        subject: "We received your message!",
        html: contactUserHTML({ name, service, message }),
      });

      return NextResponse.json({ success: true });
    } else if ("email" in body) {
      // Newsletter subscription
      const parsed = NewsletterSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: "Invalid subscription data." }, { status: 400 });
      }

      const { email, name } = parsed.data;

      await resend.emails.send({
        from: "Circumcentric <hello@circumcentric.com>",
        to: email,
        subject: "Confirm Your Subscription",
        html: newsletterUserHTML(name || "", email),
      });

      return NextResponse.json({ success: true });
    }

    // If neither matches
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Email failed to send." }, { status: 500 });
  }
}