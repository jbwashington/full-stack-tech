const mailgun = require('mailgun.js');
const formData = require('form-data');

const DOMAIN = process.env.MAILGUN_DOMAIN;

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const data = {
  from: `Full Stack Tech Team <noreply@${process.env.MAILGUN_DOMAIN}>`,
  to: [email],
  subject: "Your Requested Free Guide to Data-Driven Business Growth",
  template: "Guide to Data-Driven Business Growth",
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {

      const response = await mg.messages().send(data, function (error, body) {
        console.log(body);
      }
      );

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

