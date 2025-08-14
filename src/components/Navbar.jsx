import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Universities",
    dropdown: [
      {
        label: "Westland University",
        path: "/universities/westland-university",
      },
      {
        label: "Precious Cornerstone University",
        path: "/universities/preciousconerstone-university",
      },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 py-3">
      <div className="px-7 md:px-25 mx-auto flex justify-between h-16 items-center">
        <Link
          to="/"
          className="text-xl font-bold text-blue-500"
          onClick={closeMobileMenu}
        >
          Annetcom <br /> Education Hub
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-9  items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <Dropdown
                key={link.label}
                label={link.label}
                items={link.dropdown}
              />
            ) : (
              <NavItem key={link.label} label={link.label} path={link.path} />
            )
          )}
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FaTimes className="h-6 w-6 text-gray-800" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <MobileDropdown
                  key={link.label}
                  label={link.label}
                  items={link.dropdown}
                  index={index}
                  closeMobileMenu={closeMobileMenu}
                />
              ) : (
                <MobileNavItem
                  key={link.label}
                  label={link.label}
                  path={link.path}
                  index={index}
                  closeMobileMenu={closeMobileMenu}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ label, path }) {
  return (
    <Link to={path} className="text-gray-700 hover:text-blue-600 font-medium">
      {label}
    </Link>
  );
}

function Dropdown({ label, items }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600">
        {label}
        <FaChevronDown className="h-3 w-3" />
      </button>

      <AnimatePresence>
        {openDropdown && (
          <motion.div
            className="absolute bg-white shadow-md mt-2 rounded-md min-w-[180px] z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
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

function MobileNavItem({ label, path, index, closeMobileMenu }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={path}
        className="block text-gray-700 font-medium px-2 py-1"
        onClick={closeMobileMenu}
      >
        {label}
      </Link>
    </motion.div>
  );
}

function MobileDropdown({ label, items, index = 0, closeMobileMenu }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="pl-2">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center w-full text-left text-gray-700 font-medium"
        >
          {label}
          <FaChevronDown className="h-3 w-3 ml-1" />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="pl-4 space-y-1 mt-1"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: "auto",
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.08,
                  },
                },
                collapsed: {
                  opacity: 0,
                  height: 0,
                  transition: {
                    when: "afterChildren",
                  },
                },
              }}
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.label}
                  variants={{
                    open: { x: 0, opacity: 1 },
                    collapsed: { x: -30, opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    className="block text-gray-700 font-medium px-2 py-1"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
