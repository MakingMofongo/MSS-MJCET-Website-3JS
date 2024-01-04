// pages/api/message.js

// export function handler(req, res) {
//     // Handle the API logic here
//     res.status(200).json({ message: 'Hello from the API endpoint!' });
//   }
  

import sgMail from '@sendgrid/mail';
import DOMPurify from 'dompurify';
import { NextResponse } from 'next/server';

sgMail.setApiKey('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');

export async function POST(request,res) {
  const email = request.body.email;
  const message = request.body.message;

  // Validate email and message (add your validation logic here)

  const msg = {
    to: 'mssmjcetmailer@gmail.com', // Change to your recipient
    from: 'mssmjcetmailer@gmail.com', // Change to your verified sender
    subject: 'Contact Form Submission',
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
    // return NextResponse.json(
    //   { message: 'Email sent successfully' },
    //   { status: 200 }
    // )
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    // return NextResponse.json(
    //   { error: 'Internal Server Error' },
    //   { status: 500 }
    // )
  }
}
