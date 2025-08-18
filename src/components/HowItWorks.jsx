import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaSearch,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaBullseye className="text-blue-500 text-4xl" />,
    title: "Share your goals",
    description:
      "Tell us about your academic interests, budget, and career plans.",
  },
  {
    icon: <FaSearch className="text-green-500 text-4xl" />,
    title: "We analyze your options",
    description:
      "Our system and experts review the best possible universities for you.",
  },
  {
    icon: <FaHandshake className="text-purple-500 text-4xl" />,
    title: "We match you with the best fit",
    description:
      "Get personalized recommendations tailored to your unique needs.",
  },
  {
    icon: <FaCheckCircle className="text-yellow-500 text-4xl" />,
    title: "You apply with confidence",
    description:
      "Proceed with your chosen university knowing it’s the right choice.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          From understanding your needs to applying with confidence we make
          the journey smooth and stress-free.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
