import Head from 'next/head';
import Link from 'next/link';
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useInterval } from "../utils/use-interval";
import Chatbot from "../components/Chatbot";
import UserTestimonials from "../components/UserTestimonials";

export default function Home() {

  const prompt = "a Picasso style painting of a corporate headshot of a person in business casual attire";
  const [loading, setLoading] = useState(false);
  const [messageId, setMessageId] = useState("");
  const [image, setImage] = useState(null);
  const [canShowImage, setCanShowImage] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  useInterval(
    async () => {
      const res = await fetch(`/api/poll?id=${messageId}`);
      const json = await res.json();
      if (res.status === 200) {
        setLoading(false);
        setImage1(json.data[0].url);
        setImage2(json.data[1].url);
        setImage3(json.data[2].url);
        setImage4(json.data[3].url);}
    },
    loading ? 1000 : null
  );

  return (
    <div className="container">
    <Head>
    <title>Full Stack Tech LLC</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

    <section className="py-5 text-center">
    <h2 className="display-4">Transform Your Business with AI-Powered Solutions</h2>
    <p>Embrace the power of artificial intelligence to streamline operations, automate processes, and engage your customers in new and meaningful ways. At Full Stack Tech LLC, we pioneer the integration of advanced AI technologies like chatbots into your digital experience. Witness firsthand the potential of AI in transforming how your business operates.</p>
    <Chatbot />
    </section>

    <section id="services" className="py-5">
    <div className="container">
    <h2 className="text-center mb-5">Our Services</h2>
    <div className="row">
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
    <div className="card-body">
    <h5 className="card-title">Full Stack Web Development</h5>
    <p className="card-text">We bring your visions to life by crafting dynamic, robust, and engaging web applications tailored to your business needs, using a diverse range of modern technologies.</p>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
    <div className="card-body">
    <h5 className="card-title">AI-Driven Business Automation</h5>
    <p className="card-text">Drive efficiencies by leveraging AI. We incorporate technologies like chatGPT and Langchain to automate processes, increasing productivity and saving time.</p>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
    <div className="card-body">
    <h5 className="card-title">Consulting & Training</h5>
    <p className="card-text">We provide in-depth consulting services and training to ensure your team can leverage the full potential of the technology we build and implement for your business.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

    <section id="why-choose-us" className="py-5 bg-light">
    <div className="container">
    <h2 className="text-center mb-5">Why Choose Full Stack Tech LLC?</h2>
    <div className="row">
    <div className="col-md-4">
    <h5>Custom AI Applications</h5>
    <p>We don’t just build websites; we build AI-powered platforms to spur rapid business growth. Our solutions are engineered to adapt to your business context, delivering tangible benefits like operational efficiency, personalized customer experiences, and actionable insights.</p>
    </div>
    <div className="col-md-4">
    <h5>Expertise Across Technologies</h5>
    <p>We’re proficient across a wide spectrum of web technologies, from front-end JavaScript frameworks like Next.js to backend solutions like Firebase. This diverse technical expertise enables us to design and implement the ideal tech stack for your specific needs.</p>
    </div>
    <div className="col-md-4">
    <h5>Commitment to Client Success</h5>
    <p>Your success is our success. We believe in fostering long-term relationships with our clients. This means we're dedicated to understanding your business, maintaining open communication, and providing post-deployment support to ensure the solutions we build continue to add value to your business.</p>
    </div>
    </div>
    </div>
    </section>

    <section id="ai-in-action" className="py-5">
    <div className="container">
    <h2 className="text-center mb-5">AI in Action</h2>
    <p>At Full Stack Tech LLC, we believe that AI can empower businesses of all sizes to increase productivity, improve customer satisfaction, and drive growth. Here are just a few of the ways our AI-powered solutions can help:</p>
    <div className="row">
    <div className="col-md-4">
    <h5>Automated Customer Support</h5>
    <p>AI-powered chatbots can provide 24/7 customer support, reducing wait times and improving customer satisfaction. They can be integrated into websites or messaging platforms, offering convenient assistance for users and freeing up your team to focus on other tasks.</p>
    </div>
    <div className="col-md-4">
    <h5>Process Automation</h5>
    <p>AI can automate repetitive tasks, reducing errors and freeing up valuable staff time. From data entry to scheduling, AI can handle a variety of administrative tasks, helping your team to focus on more strategic initiatives.</p>
    </div>
    <div className="col-md-4">
    <h5>Insightful Analytics</h5>
    <p>AI can analyze large datasets to uncover patterns and trends, providing valuable insights. These insights can guide strategy, improve decision-making, and predict future trends, helping you to stay one step ahead of the competition.</p>
    </div>
    </div>
    <p className="mt-4 text-center">
    Ready to see how AI can transform your business?
    <Link href="/contact">Contact us</Link> to discuss the possibilities.
    </p>
    </div>
    </section>

    <UserTestimonials />

    <section id="about-us">
    <div className="text-center py-5">
    <h2 className="text-3xl font-semibold mb-4">About Full Stack Tech LLC</h2>
    <p className="px-4">
    Full Stack Tech is a proud 100% minority-owned business. We value diversity and inclusivity, not just because it's the right thing to do, but because we believe it makes us stronger and more competetive. Our team is comprised of an amazing mix of talent from all around the world, and we work hard to foster a culture of respect and open-mindedness.
    </p>
    <p className="px-4 mt-4">
    We're always on the lookout for people who are constantly innovating and reimagining estabilshed processes. If you're someone who's curious, talented, and fun to work with, we'd love to hear from you.
    </p>
    <div className="mt-4">
    <Link href="/careers">
    <button className="btn btn-primary">Apply to Work With Us</button>
    </Link>
    </div>
    </div>
    </section>

    </main>

    <footer className="py-5 text-center">
    <h2 className="mb-4">Get In Touch</h2>
    <form action="/api/contact" method="post">
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input type="text" className="form-control" id="name" name="name" required />
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Your Email</label>
    <input type="email" className="form-control" id="email" name="email" required />
    </div>
    <div className="mb-3">
    <label htmlFor="message" className="form-label">Your Message</label>
    <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
    </footer>
    </div>
  )
}

