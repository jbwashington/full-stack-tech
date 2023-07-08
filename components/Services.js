import axios from "axios";
import { useState } from "react";
import styles from '../styles/Services.module.css';

function Services() {

  return (
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
  );
};

export default Services;


