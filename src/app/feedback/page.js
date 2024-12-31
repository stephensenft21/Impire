"use client";

import React from "react";
import { useFeedbackContext } from "../../context/FeedbackProvider";
import { motion } from "framer-motion";

const FeedbackPage = () => {
  const { feedback } = useFeedbackContext();

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-bold mb-10 text-center text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feedback
      </motion.h1>

      {/* Feedback List */}
      {feedback && feedback.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {feedback.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-2">
                {item.name}
              </h2>
              <p className="text-sm text-gray-300 mb-2">{item.email}</p>
              <p className="text-gray-200">{item.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                Submitted on {new Date(item.submittedAt).toLocaleString()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-gray-400 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          No feedback available.
        </motion.p>
      )}
    </motion.div>
  );
};

export default FeedbackPage;
