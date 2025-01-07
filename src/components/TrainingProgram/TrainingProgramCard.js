import { motion } from 'framer-motion';
import React from 'react';
import { useTrainingContext } from '../../context/TrainingProvider';

export const TrainingProgramCard = ({ program }) => (
    <motion.div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
      <h3 className="text-xl font-bold mb-2">{program.name}</h3>
      <p>{program.description}</p>
      <p className="mt-2 text-purple-400">Progress: {program.progress}%</p>
    </motion.div>
  );