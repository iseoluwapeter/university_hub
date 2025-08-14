import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HomeHero,
  HomeHero2,
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
} from "../assets";

const testimonials = [
  {
    quote:
      "I had no idea where to start until I found this platform. Their guidance made my admission process stress-free!",
    author: "Sarah M., Westland University Student",
    image: Testimonial_1,
  },
  {
    quote:
      "From choosing the right university to settling in, they were with me all the way. Highly recommended!",
    author: "Taiwo O., Precious Conerstone University Student",
    image: Testimonial_2,
  },
  {
    quote:
      "This platform truly made a difference in my academic journey. Supportive and easy to use!",
    author: "Linda A., Westland University Student",
    image: Testimonial_3,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 my-13 ">
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-900">
        What Our Students Say
      </h2>
      <Slider {...settings}>
        {testimonials.map(({ quote, author, image }, index) => (
          <div
            key={index}
            className="px-6 flex flex-col justify-center items-center text-center"
          >
            <img
              src={image}
              alt={author}
              className="w-24 h-24 rounded-full object-cover mb-4 shadow-md mx-auto"
            />
            <blockquote className="text-lg italic text-gray-700 mb-4 relative before:content-['“'] before:absolute before:-left-6 before:text-6xl before:text-blue-200 max-w-xl">
              {quote}
            </blockquote>
            <p className="text-blue-900 font-semibold">— {author}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
