'use client'
import { useMealPlanContext } from '../../context/MealPlanContext';
import { motion } from 'framer-motion';
import React ,{useEffect}from 'react'
export const MealPlanView = () => {
    const { mealPlans, fetchMealPlans } = useMealPlanContext();
  
    useEffect(() => {
      fetchMealPlans();
    }, []);
  
    return (
      <motion.div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4">Meal Plans</h2>
        <ul>
          {mealPlans.map((meal) => (
            <li key={meal.id} className="p-2 border-b">
              {meal.name} - {meal.calories} calories
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };