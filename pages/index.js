import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useInterval } from "../utils/use-interval";
import Header from "../components/Header";
import Services from "../components/Services";
import UserTestimonials from "../components/UserTestimonials";
import UniqueValueProposition from "../components/UniqueValueProposition";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


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

