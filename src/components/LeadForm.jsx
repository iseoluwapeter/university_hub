import React from "react";
import { motion } from "framer-motion";

const LeadForm = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🎓 Let’s Match You With Your Ideal University
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Share your goals, budget, and preferred course. Our team will
          recommend universities tailored just for you — helping you make the
          right choice without the guesswork.
        </motion.p>

        {/* Form */}
        <motion.form
          className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto text-gray-900"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Intended Course"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📩 Help Me Find My Match
          </motion.button>
          <p className="text-xs text-gray-500 text-center mt-3">
            Your details are safe — no spam, just personalised guidance.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;
