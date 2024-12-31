import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PaymentContext = createContext();

export const usePayment = () => useContext(PaymentContext);

const quickBooksAxios = axios.create({
  baseURL: 'https://quickbooks.api.intuit.com/v3/company',
  headers: {
    Authorization: `Bearer ${process.env.QUICKBOOKS_REFRESH_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const PaymentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Create a Stripe Payment Intent
  const createStripePaymentIntent = async (amount, currency = 'usd') => {
    try {
      setLoading(true);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
      });
      setLoading(false);
      return paymentIntent.client_secret;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  // Sync Payment Data to QuickBooks
  const syncPaymentToQuickBooks = async (paymentData) => {
    try {
      setLoading(true);
      const response = await quickBooksAxios.post(
        `/${process.env.QUICKBOOKS_REALM_ID}/payment`,
        {
          Payment: {
            TotalAmt: paymentData.amount,
            CustomerRef: {
              value: paymentData.customerId,
            },
            Line: [
              {
                Amount: paymentData.amount,
                LinkedTxn: [
                  {
                    TxnId: paymentData.invoiceId,
                    TxnType: 'Invoice',
                  },
                ],
              },
            ],
          },
        }
      );
      setLoading(false);
      setSuccess('Payment synced to QuickBooks.');
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  // Create Payment in Stripe and Sync to QuickBooks
  const processPayment = async (amount, customerData, currency = 'usd') => {
    try {
      const stripeSecret = await createStripePaymentIntent(amount, currency);

      // After successful Stripe payment, sync to QuickBooks
      const quickBooksData = {
        amount,
        customerId: customerData.id,
        invoiceId: customerData.invoiceId,
      };
      await syncPaymentToQuickBooks(quickBooksData);

      return stripeSecret;
    } catch (err) {
      console.error('Payment Processing Error:', err);
      throw err;
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        loading,
        error,
        success,
        createStripePaymentIntent,
        syncPaymentToQuickBooks,
        processPayment,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
