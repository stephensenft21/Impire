'use client';

import React, { useState } from 'react';
import { setupRecaptcha, signInWithPhone, confirmCode } from './firebase';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = () => {
    setupRecaptcha();
    signInWithPhone(phoneNumber);
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    confirmCode(code);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.button
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Sign in with Phone
        </motion.button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            className="fixed top-1/2 left-1/2 w-11/12 max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Dialog.Close asChild>
              <motion.button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                ✖
              </motion.button>
            </Dialog.Close>
            <h1 className="text-xl font-bold text-center mb-4">Phone Sign In</h1>
            <div className="space-y-4">
              <div>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
                <motion.button
                  onClick={handleSendCode}
                  className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Code
                </motion.button>
              </div>
              {isCodeSent && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
                  />
                  <motion.button
                    onClick={handleVerifyCode}
                    className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    Verify Code
                  </motion.button>
                </div>
              )}
              <div id="recaptcha-container" className="mt-4"></div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PhoneSignIn;
