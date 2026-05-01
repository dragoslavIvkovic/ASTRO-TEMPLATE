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
      interests: z.string().min(5, 'Please describe your interests'),
      _hp: z.string().optional(), // Honeypot field
    }),
    handler: async ({ email, interests, _hp }) => {
      console.log('--- Newsletter Action Started ---');
      console.log(`Payload received: Email=${email}, Interests=${interests}, HP=${_hp || 'empty'}`);

      // Honeypot check: if field is filled, it's likely a bot
      if (_hp) {
        console.warn('CRITICAL: Honeypot triggered! Submited by a bot. Aborting send but returning fake success.');
        return { message: 'Success' }; 
      }

      console.log('Attempting to send email via Resend...');

      try {
        const { data, error } = await resend.emails.send({
          from: "Create Web Place <info@createwebplace.com>",
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
          console.error('RESEND ERROR:', error);
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: error.message,
          });
        }

        console.log('SUCCESS: Email sent successfully through Resend!', data);
        return data;
      } catch (err) {
        console.error('SERVER FATAL ERROR:', err);
        throw err;
      } finally {
        console.log('--- Newsletter Action Finished ---');
      }
    },
  }),
};
