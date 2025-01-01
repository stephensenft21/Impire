
"use client";
import { useAppContext } from "./AppContext";
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const [training, setTraining] = useState([]);

  const API_BASE = "http://localhost:8080/trainings";

  const fetchTraining = async () => {
    try {
      const response = await axios.get(API_BASE);
      setTraining(response.data);
    } catch (error) {
      console.error("Error fetching training data:", error);
    }
  };

  const createTraining = async (newTraining) => {
    try {
      const response = await axios.post(API_BASE, newTraining);
      setTraining((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating training:", error);
    }
  };

  const updateTraining = async (id, updatedTraining) => {
    try {
      const response = await axios.put(`${API_BASE}/${id}`, updatedTraining);
      setTraining((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error("Error updating training:", error);
    }
  };

  const deleteTraining = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setTraining((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting training:", error);
    }
  };

  return (
    <TrainingContext.Provider
      value={{ training, fetchTraining, createTraining, updateTraining, deleteTraining }}
    >
      {children}
    </TrainingContext.Provider>
  );
};

export const useTrainingContext = () => {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error("useTrainingContext must be used within a TrainingProvider");
  }
  return context;
};
    