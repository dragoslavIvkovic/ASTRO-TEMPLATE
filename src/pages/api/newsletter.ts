import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { SITE_DATA } from '~/site-config';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');
  const confirmEmail = data.get('confirmEmail');
  const interests = data.get('interests');

  // Server-side validation
  if (!email || !confirmEmail || !interests) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
  }

  if (email !== confirmEmail) {
    return new Response(JSON.stringify({ message: 'Emails do not match' }), { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables');
    return new Response(JSON.stringify({ message: 'Server configuration error' }), { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use a verified domain in production
      to: SITE_DATA.forms.recipientEmail,
      subject: `New Newsletter Subscription: ${SITE_DATA.client.name}`,
      html: `
        <h1>New Subscription Request</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong></p>
        <p>${interests}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
};
