import { EmailTemplate } from '../../ui/contact/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_fqLJaNxZ_PfMK1TPbhRmFQXnB9djxSHjY");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['anthonysaa93@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

