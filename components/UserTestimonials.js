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
      name: "John D.",
      role: "CEO, TechCompany",
      feedback: "Full Stack Tech transformed our business by leveraging the power of AI.",
      image: images[0] || "",
    },
    {
      name: "Maria P.",
      role: "Founder, StartUpX",
      feedback: "Thanks to Full Stack Tech, our productivity has increased by 60%. Their AI solutions are a game-changer!",
      image: images[1] || "",
    },
    {
      name: "Li Wei K.",
      role: "CTO, FutureDynamics",
      feedback: "The team at Full Stack Tech took our vision and made it a reality. Their AI integration completely revolutionized our customer service.",
      image: images[2] || "",
    },
    {
      name: "Sandra B.",
      role: "Manager, LocalBiz",
      feedback: "We never thought AI could have such a big impact on a small business like ours. Full Stack Tech made it possible.",
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
                  src={`data:image/png;base64,${testimonial.image}`}
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
