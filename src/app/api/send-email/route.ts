import nodemailer from "nodemailer";

interface EmailRequest {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export async function POST(req: Request) {
  try {
    const body: EmailRequest = await req.json();
    console.log({ body });
    const { from, to, subject, text } = body;

    const smtpConfig = {
      host: "mail.infomaniak.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@wkpages.com",
        pass: "atk1BCD2MVQ34G@",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
