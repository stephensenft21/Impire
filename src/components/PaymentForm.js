"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe has not loaded properly.");
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (paymentError) {
      setError(paymentError.message);
      setIsProcessing(false);
      return;
    }

    const response = await fetch("/api/stripe/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error.message);
      setIsProcessing(false);
    } else {
      alert("Payment successful!");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <CardElement className="p-2 border rounded bg-white" />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button
        type="submit"
        disabled={isProcessing || !stripe}
        className="bg-purple-500 text-white px-4 py-2 mt-4 rounded hover:bg-purple-600 transition duration-300"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default function PaymentPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-md mx-auto mt-16">
        <motion.h1
          className="text-4xl font-bold text-center text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Make a Payment
        </motion.h1>
        <motion.div
          className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </motion.div>
      </div>
    </motion.div>
  );
}
