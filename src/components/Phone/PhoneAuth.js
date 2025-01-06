"use client";

import React, { useState } from "react";
import { setupRecaptcha, signInWithPhone, confirmCode } from "../../utils/phoneAuth";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handlePhoneSignIn = () => {
    setupRecaptcha();
    signInWithPhone(phoneNumber)
      .then(() => setIsOtpSent(true))
      .catch((error) => console.error(error.message));
  };

  const handleOtpVerification = () => {
    confirmCode(otp).catch((error) => console.error(error.message));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.button
          className="w-full bg-purple-500 py-2 rounded hover:bg-purple-600"
          whileHover={{ scale: 1.05 }}
        >
          Login with Phone
        </motion.button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
        <Dialog.Content className="bg-gray-800 text-white p-6 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-4">
            Phone Login
          </Dialog.Title>
          <Dialog.Close className="absolute top-2 right-2 text-gray-400 hover:text-white">
            &times;
          </Dialog.Close>

          {!isOtpSent ? (
            <div>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded mb-4"
              />
              <motion.button
                onClick={handlePhoneSignIn}
                className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
              >
                Send OTP
              </motion.button>
              <div id="recaptcha-container" className="mt-4"></div>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded mb-4"
              />
              <motion.button
                onClick={handleOtpVerification}
                className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                Verify OTP
              </motion.button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PhoneAuth;
