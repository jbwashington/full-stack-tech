import cn from "classnames";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

function Testimonials() {
  const [images, setImages] = useState([]);
  const [canShowImage, setCanShowImage] = useState(false);
  const prompt = "van gogh style painting of a corporate headshot portrait of a person in business casual attire";

  const testimonials = [
    {
      name: "Meisha D.",
      role: "Vice President, Greenwood Bank & Trust",
      feedback: "Full Stack Tech improved our workflow, and we could see the results of their work immediately. We're clients for life!",
      image: images[0] || "",
    },
    {
      name: "Khadījah M.",
      role: "CTO, International Hairport Corporation",
      feedback: "Thanks to Full Stack Tech, we get to skip all the boring parts of our jobs and focus on what we love: making our customers look good.",
      image: images[1] || "",
    },
    {
      name: "LaShonda R.",
      role: "Data Scientist, Eastern BioMed Research Institute",
      feedback: "The team at Full Stack Tech took our raw data that had been collecting for years and helped us cut out processes in our workflow that were redundant, saving us time and resources. They implemented our vision way beyond our expectations, and we are extremely satisfied.",
      image: images[2] || "",
    },
    {
      name: "Burnadette W.",
      role: "Founder, Saving Our Babies",
      feedback: "We never thought that building out a custom software solution could have such a big impact on a nonprofit like ours. Full Stack Tech made it possible for us to make a positive impact on the communities that need it most.",
      image: images[3] || "",
    },
  ];

  // Assuming you fetch your images and set the `images` state here

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <Image
                  alt={`Dall-E representation of: ${prompt}`}
                  className={cn("card-img-top rounded-circle mx-auto d-block mt-3", {
                    "opacity-100": canShowImage,
                  })}
                  width='3000'
                  height='3000'
                  src={testimonial.image ? `data:image/png;base64,${testimonial.image}` : `/images/testimonial-headshot-${index + 1}.png`}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src=`/images/testimonial-headshot-${index + 1}.png`
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{testimonial.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{testimonial.role}</h6>
                  <p className="card-text">"{testimonial.feedback}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

