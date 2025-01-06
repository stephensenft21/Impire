import React, { useState } from "react";
import { motion } from "framer-motion";

const TrainingCard = ({ training }) => {
  const [hovered, setHovered] = useState(false);

  const calculateFullPrice = (price) => price + training.setupFee;

  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <h2 className="text-xl font-bold text-white">{training.title}</h2>
      <p className="text-gray-400">{training.description}</p>
      <div className="mt-4">
        <h3 className="text-white font-semibold">Pricing Options:</h3>
        <ul className="text-gray-300">
          {training.options.map((option, index) => (
            <li key={index} className="mt-1">
              {option.duration}: ${option.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-gray-300">
        <strong>Setup Fee:</strong> ${training.setupFee.toFixed(2)}
      </div>

      {hovered && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center text-white p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-lg font-bold mb-2">Full Price Details</h3>
          <ul>
            {training.options.map((option, index) => (
              <li key={index} className="mb-1">
                {option.duration}: $
                {calculateFullPrice(option.price).toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">Includes setup fee of ${training.setupFee.toFixed(2)}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TrainingCard;
