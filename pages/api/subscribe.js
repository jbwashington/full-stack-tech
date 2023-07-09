const mailgun = require('mailgun.js');
const formData = require('form-data');

const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    public_key: process.env.MAILGUN_PUBLIC_KEY,
    host: 'api.mailgun.net',
    endpoint: '/v3', // API version
    protocol: 'https',
    port: 443,
    timeout: 10000, // max request time, default is 10 seconds
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {

      const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
        from: `Full Stack Tech Team <noreply@${process.env.MAILGUN_DOMAIN}>`,
        to: [email],
        subject: "Welcome to Full Stack Tech!",
        text: "Welcome to Full Stack Tech!",
        html: `
            <h1>Welcome to our newsletter!</h1>
            <p>We're still building this out so please stay posted!</p>
            <p>--The Full Stack Tech NYC Team</p>
        `,
      });

      if (response) {
        res.status(200).json({ message: "You have been subscribed successfully!" });
      } else {
        res.status(500).json({ message: "An error occurred while subscribing. Please try again." });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred while subscribing. Please try again." });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

