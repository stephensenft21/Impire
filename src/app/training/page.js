'use client';
import React, { useEffect } from 'react';
import { useTrainingContext } from '../../context/TrainingProvider';
import TrainingCard from '../../components/Training/TrainingCard';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const TrainingPage = () => {
  const { training, loading, fetchTraining } = useTrainingContext();
  const router = useRouter();

  useEffect(() => {
    fetchTraining();
  }, [fetchTraining]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleNavigateToForm = () => {
    router.push('/training/form'); // Adjust the path if your form is in a different location
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Training Packages</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {training.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <TrainingCard training={item} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-8">
        <button
          onClick={handleNavigateToForm}
          className="bg-purple-500 text-white px-6 py-3 rounded-md shadow hover:bg-purple-600 transition"
        >
          Create Training Plan
        </button>
      </div>
    </motion.div>
  );
};

export default TrainingPage;
