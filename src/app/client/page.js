"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const transformations = [
  {
    id: 1,
    name: "Sarah",
    description: "Lost 20 lbs in 12 weeks!",
    image: "/images/transformation1.jpg",
  },
  {
    id: 2,
    name: "James",
    description: "Gained muscle and confidence!",
    image: "/images/transformation2.jpg",
  },
  {
    id: 3,
    name: "Emily",
    description: "Transformed her lifestyle completely.",
    image: "/images/transformation3.jpg",
  },
  // Add more transformations here
];

const ClientPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === transformations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-8 text-center">
        Client Transformations
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        Explore the incredible transformations achieved by our clients through
        dedication and hard work. Let their success stories inspire your
        journey!
      </p>

      <div className="relative w-full max-w-4xl">
        {/* Image Carousel */}
        <div className="overflow-hidden relative rounded-lg shadow-lg">
          <AnimatePresence>
            <motion.div
              key={transformations[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={transformations[currentIndex].image}
                alt={transformations[currentIndex].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-semibold">{transformations[currentIndex].name}</h3>
                <p className="text-gray-300 text-sm">{transformations[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-purple-500 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-purple-500 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex space-x-2 mt-6">
        {transformations.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-purple-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
