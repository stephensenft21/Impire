"use client";

import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  
  const [reviews, setReviews] = useState([]);

  const addFeedback = async (feedback) => {
    try {
      const feedbackWithId = {
        ...feedback,
        id: new Date().getTime(), // Generate a unique ID based on the timestamp
      };
  
      // Create a review object with the specified structure
      const review = {
        id: feedbackWithId.id,
        name: feedbackWithId.name,
        email: feedbackWithId.email,
        message: feedbackWithId.message,
        submittedAt: feedbackWithId.submittedAt,
      };
  
      // Update the local state immediately for optimistic UI updates
      setFeedbackList((prev) => [...prev, feedbackWithId]);
      setReviews((prev) => [...prev, review]);
  
      // Call createFeedback to persist the data on the server
      await createFeedback(review);
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };
  

  // Base URL for API (replace with your backend API endpoint)
  const API_BASE = "http://localhost:8080/reviews";

  // Fetch Feedback
  const fetchFeedback = async () => {
    try {
      const response = await axios.get(API_BASE);
      setFeedback(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Create Feedback
  const createFeedback = async (newFeedback) => {
    try {
      const response = await axios.post(API_BASE, newFeedback);
      setFeedback((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating feedback:", error);
    }
  };

  // Update Feedback
  const updateFeedback = async (id, updatedFeedback) => {
    try {
      const response = await axios.put(`${API_BASE}/${id}`, updatedFeedback);
      setFeedback((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, fetchFeedback, addFeedback,createFeedback, updateFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedbackContext must be used within a FeedbackProvider");
  }
  return context;
};
