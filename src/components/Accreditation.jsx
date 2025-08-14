import React from "react";
import {
  FaCheckCircle,
  FaHandshake,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const Accreditation = () => {
  const items = [
    {
      icon: <FaCertificate className="text-blue-600 w-6 h-6" />,
      title: "Fully Accredited",
      description: "by NUC",
    },
    {
      icon: <FaCheckCircle className="text-green-600 w-6 h-6" />,
      title: "90% Graduate Employment Rate",
      description: "Within 6 Months",
    },
    {
      icon: <FaHandshake className="text-yellow-600 w-6 h-6" />,
      title: "Partnerships",
      description: "with Leading Companies & Organizations",
    },
    {
      icon: <FaAward className="text-red-600 w-6 h-6" />,
      title: "Award-Winning Faculty",
      description: "& Innovative Research",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold mb-6 text-center">Why Trust Us</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map(({ icon, title, description }, idx) => (
          <li key={idx} className="flex items-start space-x-4">
            <div>{icon}</div>
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accreditation;
