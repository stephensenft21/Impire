"use client";
import React, { useEffect } from "react";
import { useMerchContext } from "../../context/ProductProvider.js";
import { motion } from "framer-motion";
import MerchCard from "../../components/Merch/MerchCard.js";
import { FaShoppingCart, FaSpinner } from "react-icons/fa";

const MerchPage = () => {
  const { merch, loading, fetchMerch } = useMerchContext();

  useEffect(() => {
    fetchMerch();
  }, [fetchMerch]);

  if (loading) {
    return (
      <div className="text-center text-white">
        <FaSpinner className="animate-spin text-3xl" />
        <p>Loading...</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering child animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Merch
      </motion.h1>

      {/* Merch Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {merch && merch.length > 0 ? (
          merch.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <MerchCard item={item} />
            </motion.div>
          ))
        ) : (
          <div className="text-center">
            <p>No merchandise available.</p>
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaSpinner className="animate-spin text-3xl" />
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MerchPage;
