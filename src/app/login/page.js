"use client";

import React from "react";
import { useAppContext } from "../../context/AppContext";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import PhoneAuth from "../../components/Phone/PhoneAuth";

const LoginPage = () => {
  const { signInWithGoogle } = useAppContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Google Login */}
        <motion.button
          onClick={signInWithGoogle}
          className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 flex items-center justify-center mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaGoogle className="text-white text-xl" />
          <span className="ml-2">Sign in with Google</span>
        </motion.button>

        {/* Divider */}
        <div className="text-center my-4">or</div>

        {/* Phone Login */}
        <PhoneAuth />
      </div>
    </div>
  );
};

export default LoginPage;
