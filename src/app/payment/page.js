'use client';

import React, { useState } from 'react';
import PaymentCard from '../../components/Payment/PaymentCard';
import PaymentForm from '../../components/Payment/PaymentForm';
import { motion } from 'framer-motion';

const PaymentPage = () => {
  const packages = [
    { id: 1, title: 'Basic Plan', description: 'Access to basic features', price: 30 },
    { id: 2, title: 'Premium Plan', description: 'Access to premium features', price: 50 },
    { id: 3, title: 'Pro Plan', description: 'All-inclusive plan', price: 80 },
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
            <PaymentCard
              key={pkg.id}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              onSelect={() => setSelectedPackage(pkg)}
            />
          ))}
        </motion.div>
      ) : (
        <PaymentForm selectedPackage={selectedPackage} onBack={() => setSelectedPackage(null)} />
      )}
    </div>
  );
};

export default PaymentPage;
