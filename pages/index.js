import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
    <Head>
    <title>Full Stack Tech LLC</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

    <section className="py-5 text-center">
    <h1 className="display-4">Empowering Your Business with Adaptive Technology</h1>
    <p className="lead">At Full Stack Tech LLC, we deliver customized IT solutions and leverage AI technology to automate and streamline your business processes.</p>
    <button className="btn btn-primary">Explore Our Services</button>
    </section>

    <section id="services">
    {/* List your services here */}
    </section>

    <section id="why-choose-us">
    {/* Discuss your USP here */}
    </section>

    <section id="ai-in-action">
    {/* Show real-world examples of how you've used GPT APIs to automate and streamline business processes */}
    <h1 className="title">
    <Link href="/posts/first-post">Automating business processes with Django and chatGPT functions</Link>
    </h1>
    </section>

    <section id="testimonials">
    {/* Show quotes from satisfied customers */}
    </section>

    <section id="about-us">
    {/* Brief introduction about your company */}
    </section>

    </main>

    <footer className="py-5 text-center">
    <button className="btn btn-secondary">Contact Us</button>
    </footer>
    </div>
  )
}

