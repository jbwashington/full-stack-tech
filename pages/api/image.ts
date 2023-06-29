import { NextApiRequest, NextApiResponse } from "next";
const QSTASH = `https://qstash.upstash.io/v1/publish/`;
const DALL_E = "https://api.openai.com/v1/images/generations";
const VERCEL_URL = "https://full-stack-tech-5jhezhyxo-jbwashington1.vercel.app";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prompt = "van gogh style painting of a corporate headshot portrait of a person in business casual attire";
  try {
    const response = await fetch(`${QSTASH + DALL_E}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.QSTASH_TOKEN}`,
        "upstash-forward-Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "Upstash-Callback": `${VERCEL_URL}/api/callback`,
      },
      body: JSON.stringify({
        prompt,
        n: 4,
        size: "1024x1024",
        response_format: "b64_json",
      }),
    });
    const json = await response.json();
    return res.status(202).json({ id: json.messageId });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message, type: "Internal server error" });
  }
}

