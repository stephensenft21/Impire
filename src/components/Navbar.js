"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const pathname = usePathname();
  const { user, signInWithGoogle, logout } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
    { href: "/feedback", label: "Feedback" },
    { href: "/payment", label: "Payment" },
    { href: "/merch", label: "Merch" },
    { href: "/client-transformation", label: "Client Transformation" },
  ];

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
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-purple-500 ${
                  pathname === link.href ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-300">Welcome, {user.displayName}</span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white py-4">
          <ul className="space-y-4 px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block hover:text-purple-500 ${
                    pathname === link.href ? "text-purple-400" : "text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 mt-4">
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
              <button
                onClick={signInWithGoogle}
                className="bg-blue-500 w-full px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign in with Google
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
