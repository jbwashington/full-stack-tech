import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import UserTestimonials from "../components/UserTestimonials";
import UniqueValueProposition from "../components/UniqueValueProposition";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


export default function Home() {


  return (
    <div className="container-fluid">

    <Head>
    <title>Full Stack Tech LLC</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

    <Header />
    <Services />
    <UniqueValueProposition />
    <UserTestimonials />
    <Products />
    <AboutUs />
    <Footer />

    </main>


    </div>
  )
}

