import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useInterval } from "../utils/use-interval";
// import Chatbot from "../components/Chatbot";
import UserTestimonials from "../components/UserTestimonials";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faBox, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'


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
    <div className="container-fluid">

    <Head>
    <title>Full Stack Tech LLC</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

    <header className={`${styles.headerSection} ${styles.py5} ${styles.callToAction} ${styles.bgDark}`}>
    <div className="container">
      <div className="row py-5">
        <div className="col-xs-12 col-md-10 col-lg-10">
          <h2 className={`${styles.heroTitle}`}>Transform Your Business with Data-Driven Solutions</h2>
          <p className={`${styles.heroSubtitle}`}>Streamline operations, automate processes, and engage your customers in new and meaningful ways.</p>
        </div>
      </div>
    </div>
    </header>

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
    <h5 className="card-title">UI/UX Design</h5>
    <p className="card-text">User interface design is the cover to your businesses book, and our goal is to find the balance between functaionality and design to keep your users engaged in your platform.</p>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
    <div className="card-body">
    <h5 className="card-title">Data Analysis and Visualization</h5>
    <p className="card-text">Data is the new gold, but it takes strategic planning and implementation to draw insights from data, and that's where we excel.</p>
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
    <p className='lead py-5'>At Full Stack Tech LLC, we believe that AI can empower businesses of all sizes to increase productivity, improve customer satisfaction, and drive growth. Here are just a few of the ways our AI-powered solutions can help:</p>
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
    <p className="mt-4 text-center lead">
    Ready to see how we can transform your business and deliver consistent results throughout the process?
    <Link href="/contact">  Contact us</Link> to discuss the possibilities.
    </p>
    </div>
    </section>

    <UserTestimonials />

    <section id="about-us">
    <div className="text-center py-5">
    <h2 className="text-3xl font-semibold mb-4">About Full Stack Tech LLC</h2>
    <p className="px-4 lead">
    Full Stack Tech is a proud 100% minority-owned business. We value gender, cultural and neurological diversity and inclusivity, not just because it's the right thing to do, but because we believe it makes us stronger and more competetive. Our team is comprised of an amazing mix of talent from all around the world, and we work hard to foster a culture of respect and open-mindedness.
    </p>
    <p className="px-4 mt-4 lead">
    We're always on the lookout for people who are constantly innovating and reimagining the status quo. If you're someone who's curious, talented, and fun to work with, we'd love to hear from you.
    </p>
    <div className="mt-4">
    <Link href="/careers">
    <button className="btn btn-primary">Apply to Work With Us</button>
    </Link>
    </div>
    </div>
    </section>
    </main>

    <footer className="py-5 bg-dark text-white">
    <div className="container">
    <div className="row">
    <div className="col-lg-6">
    <div className="row">
    <div className="col-sm-6">
    <h5>Site Map</h5>
    <ul className="list-unstyled text-small">
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faHome} className="me-2" />
    <a className="text-white" href="#">Home</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
    <a className="text-white" href="#">About Us</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faBox} className="me-2" />
    <a className="text-white" href="#">Services</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faAddressCard} className="me-2" />
    <a className="text-white" href="#">Contact</a>
    </div>
    </li>
    </ul>
    </div>
    <div className="col-sm-6">
    <h5>Social</h5>
    <ul className="list-unstyled text-small">
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faFacebookF} className="me-2" />
    <a className="text-white" href="#">Facebook</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faTwitter} className="me-2" />
    <a className="text-white" href="#">Twitter</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faLinkedinIn} className="me-2" />
    <a className="text-white" href="#">LinkedIn</a>
    </div>
    </li>
    <li>
    <div className="icon-text">
    <FontAwesomeIcon icon={faInstagram} className="me-2" />
    <a className="text-white" href="#">Instagram</a>
    </div>
    </li>
    </ul>
    </div>
    </div>
    <p className="mt-4">© 2023 Full Stack Tech LLC. All Rights Reserved | Privacy Policy</p>
    </div>
    <div className="col-lg-6">
    <div className="row justify-content-end">
    <div className="col-lg-8">
    <h5>Get Your Free Guide to Data-Driven Business Growth</h5>
    <p className="text-light">Sign up for our newsletter to receive our exclusive guide packed with practical strategies for leveraging data to drive your business forward. This comprehensive PDF report includes:</p>
    <ul>
    <li>Insights from industry leaders on using AI and data analytics for business growth.</li>
    <li>Case studies highlighting successful data-driven businesses.</li>
    <li>Practical tips on implementing data strategies in your business.</li>
    </ul>
    <form>
    <div className="form-group py-4">
    <label htmlFor="email" className="form-label form-label-sm">Reach Out To Us</label>
    <input type="email" className="form-control input-white" id="email" placeholder="Email Address"/>
    <div className="light-line"></div>
    </div>
    <button type="submit" id="subscribeBtn" className="btn btn-primary">Subscribe</button>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </footer>

    </div>
  )
}

