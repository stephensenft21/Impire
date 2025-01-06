import React, { useEffect } from "react";
import { useTrainingContext } from "../context/TrainingProvider";

const TrainingPackagesPage = () => {
  const { trainingPackages, fetchTrainingPackages } = useTrainingContext();

  useEffect(() => {
    fetchTrainingPackages();
  }, [fetchTrainingPackages]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Training Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trainingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{pkg.name}</h2>
            <p className="text-gray-600 mb-2">{pkg.description}</p>
            <p className="text-gray-800 font-bold mb-2">${pkg.price.toFixed(2)}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Buy Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPackagesPage;
