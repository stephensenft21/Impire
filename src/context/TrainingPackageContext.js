"use client";

import React, { createContext, useState, useContext } from "react";
import axios from "axios";

export const TrainingPackageContext = createContext();

export const TrainingPackageProvider = ({ children }) => {
  const [trainingPlans, setTrainingPlans] = useState([]);

  // Base URL for API (replace with your backend API endpoint)
  const API_BASE = "http://localhost:8080/training-plans";

  // Create Training Plan
  const createTrainingPlan = async (newPlan) => {
    try {
      const response = await axios.post(API_BASE, newPlan);
      setTrainingPlans((prevPlans) => [...prevPlans, response.data]); // Optimistic update
    } catch (error) {
      console.error("Error creating training plan:", error);
    }
  };

  // Fetch Training Plans
  const fetchTrainingPlans = async () => {
    try {
      const response = await axios.get(API_BASE);
      setTrainingPlans(response.data); // Set state with fetched data
    } catch (error) {
      console.error("Error fetching training plans:", error);
    }
  };

  // Update Training Plan
  const updateTrainingPlan = async (id, updatedPlan) => {
    try {
      const response = await axios.put(`${API_BASE}/${id}`, updatedPlan);
      setTrainingPlans((prevPlans) =>
        prevPlans.map((plan) => (plan.id === id ? response.data : plan))
      );
    } catch (error) {
      console.error("Error updating training plan:", error);
    }
  };

  // Delete Training Plan
  const deleteTrainingPlan = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setTrainingPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
    } catch (error) {
      console.error("Error deleting training plan:", error);
    }
  };

  return (
    <TrainingPackageContext.Provider
      value={{
        trainingPlans,
        createTrainingPlan,
        fetchTrainingPlans,
        updateTrainingPlan,
        deleteTrainingPlan,
      }}
    >
      {children}
    </TrainingPackageContext.Provider>
  );
};

export const useTrainingPackageContext = () => {
  const context = useContext(TrainingPackageContext);
  if (!context) {
    throw new Error(
      "useTrainingPackageContext must be used within a TrainingPackageProvider"
    );
  }
  return context;
};
