import React from "react";
import { motion } from "framer-motion";
import { HomeHero2, Precious_conerstone, Westland_University } from "../assets";
import { FaMoneyBillWave, FaClock, FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FeaturedUniversities() {
  const universities = [
    {
      image: Westland_University,
      name: "Westland University",
      location: "Iwo, Osun state Nigeria",
      tagline: "Excellence in Knowledge and Character",
      link: "/universities/westland-university",
      takeaways: [
        {
          icon: <FaMoneyBillWave className="text-green-500" />,
          text: "Affordable Tuition",
        },
        {
          icon: <FaClock className="text-blue-500" />,
          text: "Flexible Classes",
        },
        {
          icon: <FaLaptop className="text-purple-500" />,
          text: "Modern E-Learning",
        },
      ],
    },
    {
      image: Precious_conerstone,
      name: "Precious Cornerstone University",
      location: "Ota, Ogun State",
      tagline: "Raising a New Generation of Leaders",
      link: "/universities/preciousconerstone-university",
      takeaways: [
        {
          icon: <FaMoneyBillWave className="text-green-500" />,
          text: "Scholarships Available",
        },
        {
          icon: <FaClock className="text-blue-500" />,
          text: "Weekend Programs",
        },
        {
          icon: <FaLaptop className="text-purple-500" />,
          text: "State-of-the-Art Labs",
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-10 md:px-20 bg-gray-50">
      <div className=" mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="block h-1 w-16 bg-red-400 mx-auto mb-4"></span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Universities
          </h2>
          <p className="text-gray-600 mt-2">
            Discover top universities with a tradition of excellence
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {uni.name}
                </h3>
                <p className="text-sm text-gray-500">{uni.location}</p>
                <p className="text-sm text-gray-700 mt-2 italic">
                  “{uni.tagline}”
                </p>

                {/* Takeaways */}
                <ul className="mt-4 space-y-2">
                  {uni.takeaways.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      {t.icon}
                      {t.text}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to={uni.link}
                  className="inline-block mt-4 text-red-500 hover:text-red-400 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
