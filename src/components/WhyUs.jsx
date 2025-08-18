import React from "react";
import {
  FaSearchLocation,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaBalanceScale,
  FaLifeRing,
} from "react-icons/fa";
import {
  GraduatingGuy,
  GraduatingHands,
  HomeHero2,
  LibraryStudents,
} from "../assets";

const features = [
  {
    icon: <FaSearchLocation className="text-red-400 w-8 h-8" />,
    title: "Personalised Search",
    description:
      "Find universities based on your career goals, budget, and location.",
  },
  {
    icon: <FaChalkboardTeacher className="text-red-400 w-8 h-8" />,
    title: "Step-by-Step Guidance",
    description: "Navigate the admission process with zero confusion.",
  },
  {
    icon: <FaBalanceScale className="text-red-400 w-8 h-8" />,
    title: "Cost Transparency",
    description: "Compare tuition fees and living costs at a glance.",
  },
  {
    icon: <FaLifeRing className="text-red-400 w-8 h-8" />,
    title: "Ongoing Support",
    description: "From application to arrival, we’re with you every step.",
  },
];
const WhyUs = () => {
  return (
    <section className="py-16 px-2 md:px-20 bg-white">
      <div className=" mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={GraduatingHands}
            alt="Students learning"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="grid gap-4">
            <img
              src={GraduatingGuy}
              alt="Group discussion"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={LibraryStudents}
              alt="Outdoor studying"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div>
          <span className="block h-1 w-16 bg-red-400 mb-4"></span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Preparing You Today for the Opportunities of Tomorrow
          </p>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
