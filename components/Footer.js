import { useState } from "react";
import Subscribe from "../components/Subscribe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faBox, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Footer.module.css';

function Footer() {

  return (
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
    <Subscribe />
    </div>
    </div>
    </div>
    </div>
    </div>
    </footer>
  );
}

export default Footer

