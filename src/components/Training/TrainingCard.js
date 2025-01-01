import React from "react";
import { motion } from "framer-motion";

const TrainingCard = ({ training }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-bold text-white">{training.title}</h2>
      <p className="text-gray-400">{training.description}</p>
    </motion.div>
  );
};

export default TrainingCard;
