import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useProfileContext } from '../../context/ProfileContext';

export const ProfileDetails = () => {
  const { profile, fetchProfile } = useProfileContext();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <motion.div
      className="p-6 bg-gray-900 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
    </motion.div>
  );
};


