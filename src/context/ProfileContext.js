// ProfileProvider.js
import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api/api';

const ProfileContext = createContext();
export const useProfileContext = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await api.get('/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  const createProfile = async (newProfile) => {
    try {
      const response = await api.post('/profile', newProfile);
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to create profile:', error);
    }
  };

  const updateProfile = async (updatedData) => {
    try {
      const response = await api.put('/profile', updatedData);
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile, createProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// api.js

