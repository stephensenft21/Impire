"use client";
import React from "react";
import Parallax from "../../components/Parallax"; // Adjust path as needed
import { motion } from "framer-motion";
import Link from "next/link"; // Assuming you're using Next.js
import * as Tooltip from "@radix-ui/react-tooltip"; // Radix UI Tooltip
import * as Dialog from "@radix-ui/react-dialog"; // Radix UI Dialog
const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Section */}
      <Parallax image="../../assets/images/TJ.png">
        <motion.h1
          className="text-6xl text-white font-cinzel-decorative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          About Me
        </motion.h1>
      </Parallax>

      {/* Content Section */}
      <div className="px-8 py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-lg text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to <span className="text-purple-400 font-bold">Impire</span>
            ! I am a dedicated fitness trainer with years of experience helping
            clients achieve their fitness dreams. Whether you're aiming for
            strength, endurance, or transformation, I'm here to guide you every
            step of the way.
          </motion.p>
        </div>

        {/* Details Section */}
        <div className="max-w-5xl mx-auto mt-12 flex flex-col lg:flex-row items-center gap-10">
          <motion.img
            src={require("../../public/-about-me-posing-photo.jpg")}
            alt="Fitness Trainer"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.div
            className="lg:w-1/2 text-gray-300"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">What I Offer</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-purple-400 font-bold">
                  ✔ Custom Training Plans:
                </span>{" "}
                Tailored to your goals and fitness level.
              </li>
              <li>
                <span className="text-purple-400 font-bold">
                  ✔ Nutrition Guidance:
                </span>{" "}
                Optimized meal plans for better results.
              </li>
              <li>
                <span className="text-purple-400 font-bold">
                  ✔ Motivation & Support:
                </span>{" "}
                I’m with you every step of the way.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Tooltip Example */}

        {/* Call to Action */}
        <motion.div
          className="max-w-4xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-purple-500 mb-4">
            Ready to transform your body and mind?
          </h3>
          <p className="text-gray-400 mb-6">
            Let’s embark on this journey together. Your transformation starts
            here.
          </p>
          <Link href="/contact">
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
              Contact Me Today
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
