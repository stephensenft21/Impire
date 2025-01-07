

// MealPlanProvider.js
import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api/api';

const MealPlanContext = createContext();
export const useMealPlanContext = () => useContext(MealPlanContext);

export const MealPlanProvider = ({ children }) => {
  const [mealPlans, setMealPlans] = useState([]);

  const fetchMealPlans = async () => {
    try {
      const response = await api.get('/mealplans');
      setMealPlans(response.data);
    } catch (error) {
      console.error('Failed to fetch meal plans:', error);
    }
  };

  const addMealPlan = async (mealPlan) => {
    try {
      const response = await api.post('/mealplans', mealPlan);
      setMealPlans([...mealPlans, response.data]);
    } catch (error) {
      console.error('Failed to add meal plan:', error);
    }
  };

  const updateMealPlan = async (id, updatedData) => {
    try {
      const response = await api.put(`/mealplans/${id}`, updatedData);
      setMealPlans(mealPlans.map(item => item.id === id ? response.data : item));
    } catch (error) {
      console.error('Failed to update meal plan:', error);
    }
  };

  const deleteMealPlan = async (id) => {
    try {
      await api.delete(`/mealplans/${id}`);
      setMealPlans(mealPlans.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete meal plan:', error);
    }
  };

  return (
    <MealPlanContext.Provider value={{ mealPlans, fetchMealPlans, addMealPlan, updateMealPlan, deleteMealPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
};