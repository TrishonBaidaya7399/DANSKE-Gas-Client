import nodemailer from "nodemailer";

interface EmailRequest {
  firstName: string;
  phone: string;
  email: string;
  comment: string;
  recaptchaToken: string;
  contents: string;
}

export async function POST(req: Request) {
  try {
    const body: EmailRequest = await req.json();
    const { firstName, phone, email, comment, recaptchaToken, contents } = body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) throw new Error("reCAPTCHA Secret Key not configured");

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );
    const recaptchaResult = await recaptchaResponse.json();
    console.log({ recaptchaResult });
    if (!recaptchaResult.success) {
      throw new Error("reCAPTCHA validation failed");
    }

    // Use Mailgun SMTP configuration
    const smtpConfig = {
      host: "smtp.mailgun.org",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILGUN_SMTP_USERNAME,
        pass: process.env.MAILGUN_SMTP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from: "noreply@contact.danskegas.com ",
      to: "danskegas@gmail.com",
      subject: "New Contact Form Submission",
      text: contents,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully", success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
        error: true,
        success: false,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
