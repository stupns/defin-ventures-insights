import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    investmentRange,
    investorType,
    message,
  } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Ventures DeFi" <${process.env.SMTP_USER}>`,
      to: "contact@venturesdefi.com",
      replyTo: email,
      subject: "New Consultation Request",
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Investment Range:</b> ${investmentRange || "-"}</p>
        <p><b>Investor Type:</b> ${investorType || "-"}</p>
        <p><b>Message:</b><br/>${message || "-"}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Email failed" });
  }
}
