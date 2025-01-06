"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../services/api/auth/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation'; 
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Initialize useRouter

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error: ", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      // Redirect to login after logout
      router.push("/login");
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        // Redirect to dashboard if user is logged in
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]); // Add router as a dependency to avoid stale closures

  return (
    <AppContext.Provider value={{ user, signInWithGoogle, logout, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
