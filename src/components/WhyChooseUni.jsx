import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const WhyChooseUni = ({
  title,
  imageSrc,
  imageAlt,
  benefits,
  requirements,
  ctaText,
  onCtaClick,
  requirementsTitle = "Admission Requirements",
}) => {
  return (
    <section className="mx-auto px-10 md:px-25 py-20 flex flex-col justify-center lg:flex-row gap-10 w-full ">
      {/* Left Image */}
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt || "University student"}
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <hr className="border-blue-500 w-16 mb-6" />

        <ul className="space-y-4 mb-6">
          {benefits.map(({ icon, text }, index) => (
            <li key={index} className="flex  gap-3">
              {/* {icon} */}
              <span className="text-red-400 font-bold text-xl">✔</span>

              {text}
            </li>
          ))}
        </ul>

        {requirements && requirements.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-3">{requirementsTitle}</h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex gap-3">
                  {/* <FiCheckCircle
                    size={26}
                    className="text-green-600 text-4xl"
                  /> */}
                  <span className="text-blue-400 font-bold text-xl">✅</span>

                  {req}
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-6 font-semibold text-blue-600">{ctaText}</p>

        <button
          className="bg-red-400 text-white py-4 px-8 mt-5 transition-all ease-in-out hover:scale-105"
        >
          <a href="#apply-section">Apply Now</a>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUni;
