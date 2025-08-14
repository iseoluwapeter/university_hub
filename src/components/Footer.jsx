import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-10 md:px-20">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          {[
            { name: "Home", href: "/" },
            { name: "Universities", href: "/universities" },
            { name: "Admission Guide", href: "/admission-guide" },
            { name: "Events", href: "/events" },
            { name: "Contact Us", href: "/contact" },
          ].map(({ name, href }) => (
            <a key={name} href={href} className="hover:text-white transition">
              {name}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://facebook.com/uppercore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/uppercore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/uppercore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/uppercore"
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

export default Footer;
