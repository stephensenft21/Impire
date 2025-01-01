"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../context/AppContext";
import { FaShoppingCart, FaGoogle } from "react-icons/fa"; 
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const { user, signInWithGoogle, logout, cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
    { href: "/feedback", label: "Feedback" },
    { href: "/payment", label: "Payment" },
    { href: "/merch", label: "Merch" },
    { href: "/client", label: "Client Transformation" },
  ];

  const cartItemCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link href="/">Impire</Link>
        </h1>

        {/* Hamburger Menu Button */}
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

        {/* Desktop Menu */}
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

        {/* Cart Icon and User Actions */}
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
            <>
              <button
                onClick={signInWithGoogle}
                className="hidden md:inline-flex bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign in with Google
              </button>
              {/* Show Icon in Responsive Mode */}
              <motion.button
                onClick={signInWithGoogle}
                className="md:hidden p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Sign in with Google"
              >
                <FaGoogle className="text-2xl" />
              </motion.button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
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
            <div className="px-4 mt-4">
              <Link href="/cart" className="flex items-center gap-2 mb-4">
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
                <span className="text-gray-300">Cart</span>
              </Link>
              {user ? (
                <div className="flex flex-col items-start gap-2">
                  <span className="text-gray-300">Welcome, {user.displayName}</span>
                  <button
                    onClick={logout}
                    className="bg-red-500 w-full px-4 py-2 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <motion.button
                  onClick={signInWithGoogle}
                  className="w-full bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGoogle className="text-white text-xl" />
                  <span className="ml-2">Sign in with Google</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
