"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log({ body });
    const { firstName, phone, email, contents: text, recaptchaToken } = body;
    console.log({ recaptchaToken });
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({
          message: "reCAPTCHA token is required",
          success: false,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) throw new Error("reCAPTCHA Secret Key not configured");

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaResult = await recaptchaResponse.json();
    console.log("reCAPTCHA Result:", recaptchaResult); // Debug log

    if (!recaptchaResult.success) {
      throw new Error(
        `reCAPTCHA validation failed: ${JSON.stringify(recaptchaResult)}`
      );
    }

    const contents = `
      First Name: ${firstName}
      Phone: ${phone}
      Email: ${email}
      Comment: 
      ${text || "N/A"}
      Submitted on: ${new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })}
    `;

    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM}`,
      to: `${process.env.TO}`,
      subject: "New Contact Form Submission",
      react: EmailTemplate({ username: firstName, contents }),
    });

    if (error) {
      return new Response(JSON.stringify({ error, success: false }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ data, success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
