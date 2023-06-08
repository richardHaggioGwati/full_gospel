import type { NextApiRequest, NextApiResponse } from 'next';
import { ReactElement } from 'react';
import { Resend } from 'resend';
import FullGospelWelcomeEmail from '../../email/FullGospelWelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, name } = req.body as { email: string; name: string };

  if (!email || !name) {
    return res
      .status(400)
      .json({ error: 'Can not submit email without name or email address' });
  }

  try {
    const data = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Greetings from Full Gospel 🥳✝️',
      html: '<strong>It works!</strong>',
      react: FullGospelWelcomeEmail({ name }) as ReactElement,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }

  return res.status(200);
};

export default handler;
