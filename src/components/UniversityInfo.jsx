import React from "react";
import { motion } from "framer-motion";

export default function UniversityInfo({ title, subtitle, points }) {
  return (
    <section className="bg-gray-50 py-16 px-7 md:px-12 lg:px-20">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=""
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
          {title}
        </h2>
        <div className="w-20 h-1 bg-red-400 mt-2 mb-6 rounded mx-auto"></div>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
          {subtitle}
        </p>
        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex justify-center md:items-center gap-3 text-gray-800 leading-relaxed"
            >
              <span className="text-red-400 font-bold text-xl">✔</span>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
