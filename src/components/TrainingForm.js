"use client";

import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { TrainingPackageContext } from "../context/TrainingPackageContext";
import { generatePDF } from "../utils/pdfGenerator";
import { validateForm } from "../utils/formValidation";
import emailjs from "emailjs-com";

const TrainingForm = () => {
  const { createTrainingPlan } = useContext(TrainingPackageContext);

  const [formData, setFormData] = useState({
    clientName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
    phoneNumber: "",
    healthHistory: "",
    fitnessGoalsShort: "",
    fitnessGoalsLong: "",
    activityLevel: "",
    nutritionHabits: "",
    lifestyleFactors: "",
    exerciseExperience: "",
    availability: "",
    motivation: "",
    challenges: "",
    fitnessAssessment: "",
    additionalInfo: "",
    paymentMethod: "",
    checkInDay: "Monday",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Create training plan in the context
      await createTrainingPlan(formData);

      // Send email with EmailJS
      const templateParams = {
        clientName: formData.clientName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        fitnessGoalsShort: formData.fitnessGoalsShort,
        fitnessGoalsLong: formData.fitnessGoalsLong,
        activityLevel: formData.activityLevel,
        lifestyleFactors: formData.lifestyleFactors,
        // Add other fields as needed
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      alert("Training Plan Submitted and Email Sent!");
      setFormData({});
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the email. Please try again.");
    }
  };

  const handleDownloadPDF = () => {
    generatePDF(formData);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 text-white px-8 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Create Your Training Plan</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Client Details */}
          <div>
            <label className="block text-sm font-medium mb-1">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                errors.clientName ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.clientName && (
              <p className="text-red-500 text-sm">{errors.clientName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded bg-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          {/* Add additional fields following the same structure */}
        </div>

        {/* Fitness Goals */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Short-term Fitness Goals
          </label>
          <textarea
            name="fitnessGoalsShort"
            value={formData.fitnessGoalsShort}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600"
          ></textarea>
        </div>

        {/* Submit & Download */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
          >
            Download PDF
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default TrainingForm;
