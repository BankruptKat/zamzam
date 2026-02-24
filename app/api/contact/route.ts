import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { email as companyEmail } from "@/lib/site";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const serviceNeeded = body.serviceNeeded?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !phone || !email || !serviceNeeded || message.length < 10 || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide valid and complete form details." },
        { status: 400 },
      );
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL ?? companyEmail,
      replyTo: email,
      subject: `New Quote Request - ${serviceNeeded}`,
      text: `Name: ${name}
Phone: ${phone}
Email: ${email}
Service Needed: ${serviceNeeded}

Message:
${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Service Needed:</strong> ${serviceNeeded}</p>
<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
