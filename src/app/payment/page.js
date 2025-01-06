'use client';

import React, { useState } from 'react';
import PaymentCard from '../../components/Payment/PaymentCard';
import PaymentForm from '../../components/Payment/PaymentForm';
import { motion } from 'framer-motion';

const PaymentPage = () => {
  const packages = [
    { 
      id: 1, 
      title: 'Basic Plan', 
      description: 'Access to basic features', 
      price: 30,
      workoutPlan: 'Basic workout plan with core exercises.'
    },
    { 
      id: 2, 
      title: 'Premium Plan', 
      description: 'Access to premium features', 
      price: 50, 
      workoutPlan: 'Premium plan with advanced workout routines and meal guides.'
    },
    { 
      id: 3, 
      title: 'Pro Plan', 
      description: 'All-inclusive plan', 
      price: 80, 
      workoutPlan: 'Pro plan includes personalized training and nutrition advice.'
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-purple-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Payment Page
      </motion.h1>
      {!selectedPackage ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PaymentCard
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                onSelect={() => setSelectedPackage(pkg)}
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 bg-gray-800 text-white p-4 mt-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  zIndex: 10,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
                }}
              >
                <p className="text-center text-lg">{pkg.workoutPlan}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <PaymentForm selectedPackage={selectedPackage} onBack={() => setSelectedPackage(null)} />
      )}
    </div>
  );
};

export default PaymentPage;
