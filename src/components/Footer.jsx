import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-10 md:px-20">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base relative">
          <a href="/" className="hover:text-white transition">
            Home
          </a>

          {/* Universities Drop-Up */}
          <DropUp
            label="Universities"
            items={[
              {
                label: "Westland University",
                path: "/universities/westland-university",
              },
              {
                label: "Precious Cornerstone University",
                path: "/universities/preciousconerstone-university",
              },
            ]}
          />

          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://facebook.com/anettcomtechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/anettcomtechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/anettcometechakademy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/anettcomtechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500 text-xs mt-6">
        © 2025 Annetcom Education Hub. All Rights Reserved.
      </p>
    </footer>
  );
};

function DropUp({ label, items }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div
      className="relative"
      // only enable hover events on desktop
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      <button
        className="flex items-center gap-1 hover:text-white transition"
        onClick={isMobile ? toggleDropdown : undefined}
      >
        {label}
        <FaChevronUp
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute bottom-full mb-2 bg-gray-800 text-gray-300 rounded-md shadow-lg w-56 p-2 flex flex-col z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="px-3 py-2 hover:bg-gray-700 rounded-md transition"
                onClick={() => isMobile && setOpen(false)} // close when tapped on mobile
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Footer;
