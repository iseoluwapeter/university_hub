import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurStory = () => {
  const paragraphs = [
    "We started with a bold vision to make university selection stress-free, transparent, and deeply personal.",
    "What began as late-night conversations between friends has grown into a trusted companion for thousands of students, guiding them toward their dream universities.",
    "From the very first student we helped to the countless success stories today, our mission has remained the same: empower every student to make confident, informed choices about their future.",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Story
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 w-24 bg-red-400 mx-auto mt-3 mb-10 origin-left"
        ></motion.div>

        {/* Story Paragraphs */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button
            to="/contact"
            href="#university-cta"
            className="px-8 py-3 bg-red-400 text-white font-semibold rounded-lg shadow-lg hover:bg-red-500 transition duration-300"
          >
            <a href="#apply-section">Begin Your Journey</a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
