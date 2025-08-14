import React from "react";
import { FaSearch, FaClipboardCheck, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "Explore",
    description: "Search and filter universities that fit your needs.",
  },
  {
    icon: <FaClipboardCheck className="text-white text-2xl" />,
    title: "Apply",
    description: "Get free guidance through the admission process.",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Join",
    description: "Start your studies stress-free.",
  },
];

const FeatureCards = () => {
  return (
    <div className="relative z-20 -mt-20 px-6 md:px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-12">
            <div className="bg-[#1a2942] p-4 rounded">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                {feature.title} <span className="text-blue-600">→</span>
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
