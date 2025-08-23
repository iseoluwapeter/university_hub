import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({
  backgroundImage,
  headline,
  subtext,
  primaryBtnText,
  secondaryBtnText,
  secondaryLink,
  primaryLink,
  className = "",
}) => {
  const hasPrimary = primaryBtnText && primaryLink;
  const hasSecondary = secondaryBtnText && secondaryLink;

  return (
    <div
      className={`relative h-[30rem] lg:h-[40rem]  bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content above overlay */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white translate-y-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {headline && (
          <motion.h1
            className="text-2xl font-bold  md:text-5xl max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        )}

        {subtext && (
          <motion.p
            className="mt-4 max-w-2xl text-sm md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            {subtext}
          </motion.p>
        )}

        {(hasPrimary || hasSecondary) && (
          <motion.div
            className="mt-6 flex flex-col gap-5 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
          >
            {hasPrimary && (
              <a
                href="#apply-section"
                className="bg-red-400 hover:bg-red-300 px-6 py-3 text-white hover:text-gray-900 font-semibold transition"
              >
                {primaryBtnText}
              </a>
            )}

            {hasSecondary && (
              <Link
                to={secondaryLink}
                className="border border-white text-white hover:text-gray-900 hover:bg-gray-200 px-6 py-3 font-semibold transition"
                // onClick={(e) => {
                //   e.preventDefault();
                //   if (typeof secondaryLink === "function") {
                //     secondaryLink();
                //   } else {
                //     document
                //       .getElementById(secondaryLink)
                //       ?.scrollIntoView({ behavior: "smooth" });
                //   }
                // }}
              >
                {secondaryBtnText}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
