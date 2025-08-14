import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaUniversity,
  FaDollarSign,
  FaQuoteLeft,
} from "react-icons/fa";

// Stats Data
const stats = [
  {
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    number: "100+",
    label: "Students Guided",
  },
  {
    icon: <FaUniversity className="text-green-500 text-4xl" />,
    number: "95%",
    label: "Success Rate",
  },
  {
    icon: <FaDollarSign className="text-yellow-500 text-4xl" />,
    number: "N5M+",
    label: "In Tuition Savings",
  },
];



// Short Quotes
const quotes = [
  {
    text: "This platform made my university search effortless!",
    name: "Sarah A.",
  },
  { text: "I got matched with the perfect school in days.", name: "James O." },
];

const KeyResults = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Key Results & Proof
        </motion.h2>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow relative"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-3" />
              <p className="text-gray-700 italic mb-4">"{quote.text}"</p>
              <p className="text-sm font-semibold text-gray-900">
                - {quote.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyResults;
