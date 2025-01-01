'use client'
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // State to store orders

  // Add item to cart
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Create order
  const createOrder = () => {
    const newOrder = {
      id: Date.now(), // Unique order ID based on timestamp
      customerId: 1, // Assuming customer ID is 1 for now
      items: cart.map(item => ({
        productId: item.id,
        quantity: 1, // For now, assume quantity is always 1
        price: item.price,
      })),
      totalPrice: cart.reduce((total, item) => total + item.price, 0),
      status: "pending", // Default status for new orders
      date: new Date().toISOString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    setCart([]); // Clear cart after order is created
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, createOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
