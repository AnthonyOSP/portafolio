import { EmailTemplate } from '../../ui/contact/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, email, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio ASP <onboarding@resend.dev>',
      to: ['anthonysaa93@gmail.com'],
      subject: `Nuevo mensaje de ${fullName}`,
      react: EmailTemplate({ fullName, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

