const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  domain: process.env.VERIFIED_DNS_NAME,
});

export async function POST(req, res) {
  const { firstName, lastName, organization, email, phone, message } = req.body;

  const data = {
    from: `Full Stack Tech<noreply@${process.env.VERIFIED_DNS_NAME}>`,
    to: "jbwashington@gmail.com",
    subject: `Potential Customer: ${firstName} ${lastName}`,
    html: `
      <h1>Message From: ${firstName} ${lastName}</h1>
      <h2>Organization: ${organization}</h2>
      <h2>Email: ${email}</h2>
      <h2>Phone: ${phone}</h2>
      <p>${message}</p>
    `,
    'h:X-Mailgun-Variables': JSON.stringify({test: "test"})
  }

  try {
    const body = await mg.messages.create(process.env.VERIFIED_DNS_NAME, data);

    if (body) {
      res.status(200).json({ message: "Thanks for reaching out, we'll get back with you shortly!" });
    } else {
      res.status(500).json({ message: "An error occurred, please try again." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred, please try again." });
  }
}

