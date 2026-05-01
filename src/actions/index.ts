import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';
import { SITE_DATA } from '~/site-config';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email('Invalid email address'),
      confirmEmail: z.string().email('Invalid email address'),
      interests: z.string().min(5, 'Please describe your interests'),
    }),
    handler: async ({ email, confirmEmail, interests }) => {
      // Server-side validation: emails must match
      if (email !== confirmEmail) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Email addresses do not match.',
        });
      }

      const { data, error } = await resend.emails.send({
        from: `${SITE_DATA.client.name} <onboarding@resend.dev>`,
        to: [SITE_DATA.forms.recipientEmail],
        subject: `New Newsletter Subscription: ${SITE_DATA.client.name}`,
        html: `
          <h1>New Subscription Request</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Interests:</strong></p>
          <p>${interests}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: error.message,
        });
      }

      return data;
    },
  }),
};
