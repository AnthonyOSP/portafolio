import { EmailTemplate } from '../../ui/contact/email-template';
import { Resend } from 'resend';
// Asegúrate de que estás usando la variable de entorno correctamente
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    throw new Error("Missing API key. Pass it to the constructor `new Resend(\"re_123\")`");
}

// Usa la clave API en tu constructor o donde sea necesario
const resend = new Resend(apiKey);

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

