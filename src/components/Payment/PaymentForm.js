'use client';

import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

const PaymentForm = ({ selectedPackage, onBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (stripeError) {
        setError(stripeError.message);
      } else {
        console.log('Payment Method:', paymentMethod);
        alert('Payment successful!');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 text-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">Payment Details</h2>
      <div className="bg-gray-700 shadow rounded p-4 mb-4">
        <h3 className="text-lg font-bold text-purple-300">{selectedPackage.title}</h3>
        <p className="text-gray-300">{selectedPackage.description}</p>
        <span className="text-purple-400 font-bold text-xl">${selectedPackage.price}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement className="p-2 border rounded bg-gray-900 text-white" />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 flex justify-between">
          <motion.button
            type="button"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300"
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back
          </motion.button>
          <motion.button
            type="submit"
            disabled={isProcessing || !stripe}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default PaymentForm;
