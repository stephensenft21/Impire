"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MacroCalculator from "../MacroCalculator/MacroCalculator";

const Navbar = () => {
  const pathname = usePathname();
  const { user, logout, cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = user
    ? [
        { href: "/profile", label: "Profile" },
        { href: "/checkin", label: "Check-In" },
        { href: "/mealplan", label: "Meal Plan" },
        { href: "/client", label: "Client Transformation" },
        { href: "/programs", label: "Programs" },
        { href: "/rate", label: "Rate Difficulty" },
        { href: "/questions", label: "Questions/Comments" },
      ]
    : [
        { href: "/about", label: "About" },
        { href: "/training", label: "Training" },
        { href: "/contact", label: "Contact" },
        { href: "/feedback", label: "Feedback" },
        { href: "/payment", label: "Payment" },
        { href: "/merch", label: "Merch" },
        { href: "/login", label: "Login" },
      ];

  const cartItemCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Impire</Link>
        </h1>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className={`hover:text-purple-500 ${
                  pathname === link.href ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <FaShoppingCart className="text-blue text-2xl" />
              {cartItemCount > 0 && (
                <motion.span
                  className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {cartItemCount}
                </motion.span>
              )}
            </motion.div>
          </Link>

          {user ? (
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gray-300">Welcome, {user.displayName}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </motion.div>
          ) : (
            <span className="text-gray-300">Please log in</span>
          )}

          <MacroCalculator />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black text-white py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4 px-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ color: "#a855f7" }}
                >
                  <Link
                    href={link.href}
                    className={`block hover:text-purple-500 ${
                      pathname === link.href ? "text-purple-400" : "text-gray-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;