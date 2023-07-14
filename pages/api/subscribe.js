const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  domain: process.env.VERIFIED_DNS_NAME,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const data = {
      from: `Full Stack Tech Team <noreply@${process.env.VERIFIED_DNS_NAME}>`,
      to: email,
      subject: "Your Requested Free Guide to Data-Driven Business Growth",
      template: "Guide to Data-Driven Business Growth",
      'h:X-Mailgun-Variables': JSON.stringify({test: "test"})
    }

    try {
      const body = await mg.messages.create(process.env.VERIFIED_DNS_NAME, data);

      if (body) {
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

