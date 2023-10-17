// pages/api/sendMail.js
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, /* other fields */ } = req.body;

  const content = {
    to: 'willdossantosdesigns@gmail.com',
    from: 'your-service-email@example.com',
    subject: `New Connection from ${name}`,
    text: `Email: ${email}, ...other details...`,
    // You can also use html for content here
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
