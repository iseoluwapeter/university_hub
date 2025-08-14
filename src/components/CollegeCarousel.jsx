import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";

export default function CollegesCarousel({ title, backgroundImage, data }) {
  const navigate = useNavigate();

  // Navigate to route using slug
  const handleView = (slug) => {
    navigate(`/${slug}`); // route will depend on the slug given in data
  };

  return (
    <section
      className="mx-auto py-16 px-10 lg:px-25"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        {title}
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-5">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full sm:w-[48%] lg:w-[30%]"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />

            {/* Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.name}
              </h3>

              {item.programsCount && (
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {item.programsCount} Programs
                </p>
              )}

              {item.popularCourses && (
                <p className="text-gray-500 text-sm mb-4">
                  <strong>Popular Courses:</strong>{" "}
                  {item.popularCourses.join(", ")}
                </p>
              )}

              {item.fact && (
                <p className="text-green-600 text-xs italic mb-4">
                  {item.fact}
                </p>
              )}

              {/* Fees Section */}
              {item.fees && (
                <div className="bg-gray-50 rounded-md p-3 mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Fee Structure
                  </h4>
                  {item.fees.map((fee, idx) => (
                    <div key={idx} className="mb-2">
                      {fee.items ? (
                        <>
                          <p className="text-gray-800 font-medium">
                            {fee.label}
                          </p>
                          <ul className="ml-4 mt-1 space-y-1">
                            {fee.items.map((feeItem, i) => (
                              <li
                                key={i}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <FaDotCircle className="text-blue-500 mr-2" />
                                {feeItem.name}:{" "}
                                <span className="ml-1 font-semibold">
                                  {feeItem.amount}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <p className="flex items-center text-sm text-gray-600">
                          <FaDotCircle className="text-blue-500 mr-2" />
                          {fee.label}:{" "}
                          <span className="ml-1 font-semibold">
                            {fee.amount}
                          </span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* View Button */}
              <div className="mt-auto">
                <button
                  onClick={() => handleView(item.slug)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
                >
                  View More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
