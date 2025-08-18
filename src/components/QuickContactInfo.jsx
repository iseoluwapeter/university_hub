import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const QuickContactInfo = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-xl" />,
      label: "Address",
      value: "Suite 1, Grace Gas House, Osogbo, Osun state, Nigeria",
    },
    {
      icon: <FaPhoneAlt className="text-blue-600 text-xl" />,
      label: "Phone",
      value: "+234 906 184 5750",
      link: "tel:+2349061845750",
    },
    {
      icon: <FaEnvelope className="text-blue-600 text-xl" />,
      label: "Email",
      value: "info@universityconnect.com",
      link: "mailto:info@universityconnect.com",
    },
    {
      icon: <FaClock className="text-blue-600 text-xl" />,
      label: "Office Hours",
      value: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <div>
              <p className="font-semibold text-gray-800">{item.label}</p>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600">{item.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickContactInfo;
