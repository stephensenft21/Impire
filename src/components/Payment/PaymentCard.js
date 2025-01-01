'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PaymentCard = ({ title, description, price, onSelect }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-purple-600 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
    >
      <h2 className="text-xl font-bold text-purple-400">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-purple-300 font-bold text-lg mt-4">${price}</p>
    </motion.div>
  );
};

export default PaymentCard;
