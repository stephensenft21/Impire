import React, { useEffect } from "react";
import { useTrainingContext } from "../context/TrainingProvider";

const TrainingListPage = () => {
  const { trainings, fetchTrainings } = useTrainingContext();

  useEffect(() => {
    fetchTrainings();
  }, [fetchTrainings]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Training Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={training.image}
              alt={training.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{training.name}</h2>
            <p className="text-gray-600 mb-2">{training.description}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingListPage;
