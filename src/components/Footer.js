'use client';
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <h2 className="text-xl font-bold mb-4 md:mb-0">
            Impire Fitness &copy; {new Date().getFullYear()}
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Impire Fitness. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Powered by Truvidity & Geek2Physich</p>
      </div>
    </footer>
  );
};

export default Footer;
