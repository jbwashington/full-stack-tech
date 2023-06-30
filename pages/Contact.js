import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from "react";

export default function Contact() {

  return (
    <div className="container">
    <div className="row">
    <div className="col-12">
    <h2 className={`${styles.contactTitle}`}>Contact Us</h1>
    <p className={`${styles.contactSubtitle}`}>We'd love to hear from you!</p>
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
    </div>
    </div>
    </div>
  )
}


