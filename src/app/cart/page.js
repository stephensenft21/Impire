"use client";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const CartPreview = () => {
  const { cart, removeFromCart, clearCart } = useCartContext();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center text-purple-400 mb-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Your Cart
      </motion.h1>

      {cart.length === 0 ? (
        <motion.p
          className="text-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-md"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                  <p className="text-lg font-semibold">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center">
                <p className="mr-4">Quantity: {item.quantity}</p>
                <motion.button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTrashAlt />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div
        className="flex justify-between items-center bg-gray-800 p-4 mt-6 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <motion.button
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200"
          onClick={clearCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear Cart
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-200"
          onClick={() => alert("Proceeding to Checkout!")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proceed to Checkout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CartPreview;
