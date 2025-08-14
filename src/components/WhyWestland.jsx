import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const WhyChooseUniversity = ({
  title,
  imageSrc,
  imageAlt,
  benefits,
  requirements,
  ctaText,
  ctaLink,
  requirementsTitle = "Admission Requirements",
}) => {
  return (
    <section className="mx-auto px-10 md:px-25 py-20 flex flex-col md:flex-row gap-15">
      {/* Left Image */}
      <div className="flex justify-center items-center md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt || "University student"}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <hr className="border-blue-500 w-16 mb-6" />

        <ul className="space-y-4 mb-6">
          {benefits.map(({ icon, text }, index) => (
            <li key={index} className="flex items-center gap-3">
              {icon}
              {text}
            </li>
          ))}
        </ul>

        {requirements && requirements.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-3">{requirementsTitle}</h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl" />
                  {req}
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-6 font-semibold text-blue-600">{ctaText}</p>

        <button className="bg-red-400 text-white py-4 px-8 mt-5 transition-all ease-in-out hover:scale-105">
          <a href={ctaLink} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUniversity;
