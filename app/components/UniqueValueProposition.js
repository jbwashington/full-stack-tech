import { useState } from "react";
import styles from '../styles/UniqueValueProposition.module.css';

function UniqueValueProposition() {

  return (
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
  );
};

export default UniqueValueProposition;

