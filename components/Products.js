import { useState } from "react";
import Link from 'next/link';
import styles from '../styles/Products.module.css';

function Products() {

  return (
    <section id="fullstack-in-action" className="text-center py-5">
    <div className="container">
    <h2 className="mb-5">Full Stack Web Development in Action</h2>
    <p className='lead pb-5'>At Full Stack Tech, we believe that comprehensive web development can empower businesses of all sizes to increase reach, improve user experience, and drive growth. Here are just a few of the ways our full-stack solutions can help:</p>
    <div className="row">
    <div className="col-md-4">
    <h5>End-to-End Solutions</h5>
    <p>We provide comprehensive web development services covering everything from frontend to backend development. This includes creating responsive and interactive user interfaces, efficient server-side handling, and secure database management. We have it all covered so you can focus on your business.</p>
    </div>
    <div className="col-md-4">
    <h5>API Integration</h5>
    <p>We can integrate your web application with external APIs to expand its functionality. Whether it's payment gateways, mapping services, or social media platforms, we can seamlessly connect your application to the services that matter most to your business.</p>
    </div>
    <div className="col-md-4">
    <h5>Performance Optimization</h5>
    <p>We make sure that your web application performs optimally under load, providing your users with a smooth and responsive experience. This includes optimizing server responses, minimizing load times, and ensuring your application is scalable.</p>
    </div>
    </div>
    <p className="px-4 mt-4 lead">
    Ready to see how our full stack web development services can transform your online presence and deliver consistent results?
    </p>
    <div className="mt-4">
    <button className="btn btn-primary">Get In Touch With Us</button>
    </div>
    </div>
    </section>
  );
}

export default Products

