import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const { name, email, phone, company, message } = data;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL,
    subject: `Nouveau contact depuis le site - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">Nouveau message de contact</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">Message :</h3>
          <p style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
            ${message}
          </p>
        </div>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px;">
          Ce message a été envoyé depuis le formulaire de contact de votre site web.
        </p>
      </div>
    `,
    text: `
Nouveau message de contact

Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
${company ? `Entreprise: ${company}` : ''}

Message:
${message}
    `
  };

  // Send email
  await transporter.sendMail(mailOptions);
};
