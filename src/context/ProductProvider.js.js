"use client";

import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const MerchContext = createContext();

export const ProductProvider = ({ children }) => {
  const [merch, setMerch] = useState([]); 
  const API_BASE = "http://localhost:8080/products";

  const fetchMerch = async () => {
    try {
      const response = await axios.get(API_BASE);
      setMerch(response.data);
    } catch (error) {
      console.error("Error fetching merch:", error);
    }
  };

  const createMerch = async (newMerch) => {
    try {
      const response = await axios.post(API_BASE, newMerch);
      setMerch((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating merch:", error);
    }
  };

  const updateMerch = async (id, updatedMerch) => {
    try {
      const response = await axios.put(`${API_BASE}/${id}`, updatedMerch);
      setMerch((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
    } catch (error) {
      console.error("Error updating merch:", error);
    }
  };

  const deleteMerch = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setMerch((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting merch:", error);
    }
  };

  return (
    <MerchContext.Provider
      value={{ merch, setMerch, fetchMerch, createMerch, updateMerch, deleteMerch }}
    >
      {children}
    </MerchContext.Provider>
  );
};

export const useMerchContext = () => {
  const context = useContext(MerchContext);
  if (!context) {
    throw new Error("useMerchContext must be used within a MerchProvider");
  }
  return context;
};
