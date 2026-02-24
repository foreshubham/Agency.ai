import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = EmailSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { email } = parsed.data;

    // Path to CSV file (create this folder and file on your server)
    const filePath = path.join(process.cwd(), "data", "newsletter_subscribers.csv");

    // Create folder if doesn't exist
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Check if file exists; if not, write headers first
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "email,date\n", "utf8");
    }

    // Append new subscriber email with date
    const row = `"${email}","${new Date().toISOString()}"\n`;
    fs.appendFileSync(filePath, row, "utf8");

    return NextResponse.json({ success: true, message: "Subscribed successfully." });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}