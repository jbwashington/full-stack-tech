import { useState } from "react";
import Subscribe from "../components/Subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faBox, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/AboutUs.module.css';
import Link from 'next/link';

function AboutUs() {

  return (
    <section id="about-us">
    <div className="text-center py-5">
    <h2 className="text-3xl font-semibold mb-4">About Full Stack Tech LLC</h2>
    <p className="px-4 lead">
    Full Stack Tech is a proud 100% black-owned business. We value gender, cultural and neurological diversity and inclusivity, not just because it's the right thing to do, but because we believe it makes us stronger and more competetive. Our team is comprised of an amazing mix of talent from all around the world, and we work hard to foster a culture of respect and open-mindedness.
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
  );
}

export default AboutUs

