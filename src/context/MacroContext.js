import React, { useState, useContext, createContext } from 'react';
// Create Context for Macro Data
const MacroContext = createContext();

export const MacroProvider = ({ children }) => {
  const [macroData, setMacroData] = useState(null);

  const calculateMacros = ({ weight, feet, inches, age, gender, activityLevel }) => {
    const weightInKg = parseFloat(weight);
    const heightInCm = (parseFloat(feet) * 30.48) + (parseFloat(inches) * 2.54);
    const ageInYears = parseFloat(age);

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    const tdee = bmr * parseFloat(activityLevel);

    const protein = (tdee * 0.3) / 4;
    const carbs = (tdee * 0.5) / 4;
    const fats = (tdee * 0.2) / 9;

    setMacroData({ tdee, protein, carbs, fats });
  };

  return (
    <MacroContext.Provider value={{ macroData, calculateMacros }}>
      {children}
    </MacroContext.Provider>
  );
};

export const useMacroContext = () => {
  const context = useContext(MacroContext);
  if (!context) {
    throw new Error('useMacroContext must be used within a MacroProvider');
  }
  return context;
};