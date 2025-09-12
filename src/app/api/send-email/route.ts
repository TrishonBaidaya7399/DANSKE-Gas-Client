"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const text = formData.get("contents") as string;
    const recaptchaToken = formData.get("recaptchaToken") as string;
    const attachmentFile = formData.get("attachment") as File | null;

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

    // Validate attachment if present
    let attachmentData: any = null;
    if (attachmentFile && attachmentFile.size > 0) {
      const maxSize = 10 * 1024 * 1024;
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];

      if (attachmentFile.size > maxSize) {
        return new Response(
          JSON.stringify({
            message: "Attachment size must be less than 10MB",
            success: false,
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      if (!allowedTypes.includes(attachmentFile.type)) {
        return new Response(
          JSON.stringify({
            message:
              "Unsupported file type. Please use PDF, images, or documents.",
            success: false,
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const arrayBuffer = await attachmentFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64Content = buffer.toString("base64");

      attachmentData = {
        content: base64Content,
        filename: attachmentFile.name,
        type: attachmentFile.type || "application/octet-stream",
      };
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

    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Warsaw",
    });
    const attachmentInfo = attachmentData
      ? `\nAttachment: ${attachmentData.filename} (included)`
      : "";
    const contents =
      `A new contact form submission has been received from ${firstName}.

Details:
First Name: ${firstName}
Phone: ${phone}
Email: ${email}

${text || "N/A"}

Submitted on: ${currentDate}${attachmentInfo}`.trim();

    const emailData: any = {
      from: `${process.env.FROM}`,
      to: `${process.env.TO}`,
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        contents,
        hasAttachment: !!attachmentData,
      }),
    };

    if (attachmentData) {
      emailData.attachments = [attachmentData];
    }
    const { data, error } = await resend.emails.send(emailData);

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
