"use client";

import React, { useState } from "react";
import { useFeedbackContext } from "../../context/FeedbackProvider";
import { motion } from "framer-motion";

const FeedbackForm = () => {
  const { addFeedback } = useFeedbackContext();
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedback.name && feedback.email && feedback.message) {
      addFeedback({
        ...feedback,
        submittedAt: new Date().toISOString(),
      });
      setSuccess(true);
      setFeedback({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <motion.div
      className="bg-gray-900 text-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Share Your Feedback
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full p-2 rounded bg-gray-800 text-white focus:ring-purple-400 focus:ring-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full p-2 rounded bg-gray-800 text-white focus:ring-purple-400 focus:ring-2"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={feedback.message}
            onChange={handleChange}
            placeholder="Your feedback"
            className="w-full p-2 rounded bg-gray-800 text-white focus:ring-purple-400 focus:ring-2"
            rows="4"
            required
          ></textarea>
        </motion.div>
        <motion.button
          type="submit"
          className="bg-purple-500 text-white w-full p-2 rounded hover:bg-purple-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Feedback
        </motion.button>
        {success && (
          <motion.p
            className="text-green-500 text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Feedback submitted successfully!
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default FeedbackForm;
