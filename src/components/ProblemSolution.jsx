import React from "react";
import {
  FaExclamationTriangle,
  FaDollarSign,
  FaBookOpen,
  FaBolt,
  FaWallet,
  FaLightbulb,
} from "react-icons/fa";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <FaExclamationTriangle className="text-red-500 w-6 h-6" />,
      text: "Too many university options, hard to choose.",
    },
    {
      icon: <FaDollarSign className="text-red-500 w-6 h-6" />,
      text: "High tuition fees and hidden costs.",
    },
    {
      icon: <FaBookOpen className="text-red-500 w-6 h-6" />,
      text: "Confusing admission requirements and processes.",
    },
  ];

  const solutions = [
    {
      icon: <FaBolt className="text-green-500 w-6 h-6" />,
      text: "Fast, accurate university matching.",
    },
    {
      icon: <FaWallet className="text-green-500 w-6 h-6" />,
      text: "Find affordable, transparent tuition options.",
    },
    {
      icon: <FaLightbulb className="text-green-500 w-6 h-6" />,
      text: "Clear guidance on requirements and deadlines.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
      {/* Problems */}
      <div>
        <h2 className="text-2xl font-bold mb-6">The Problem</h2>
        <ul className="space-y-5">
          {problems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {item.icon}
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Our Solution</h2>
        <ul className="space-y-5">
          {solutions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {item.icon}
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSolution;
