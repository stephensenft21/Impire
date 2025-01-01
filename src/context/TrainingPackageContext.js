import React, { createContext, useState } from "react";

export const TrainingPackageContext = createContext();

export const TrainingPackageProvider = ({ children }) => {
  const [trainingPlans, setTrainingPlans] = useState([]);

  const createTrainingPlan = (plan) => {
    setTrainingPlans((prevPlans) => [...prevPlans, plan]);
    // Post to DB logic here
  };

  const readTrainingPlans = () => {
    return trainingPlans;
  };

  const updateTrainingPlan = (id, updatedPlan) => {
    setTrainingPlans((prevPlans) =>
      prevPlans.map((plan) => (plan.id === id ? updatedPlan : plan))
    );
  };

  const deleteTrainingPlan = (id) => {
    setTrainingPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  };

  return (
    <TrainingPackageContext.Provider
      value={{
        trainingPlans,
        createTrainingPlan,
        readTrainingPlans,
        updateTrainingPlan,
        deleteTrainingPlan,
      }}
    >
      {children}
    </TrainingPackageContext.Provider>
  );
};
