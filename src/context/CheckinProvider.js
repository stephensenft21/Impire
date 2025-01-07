// CheckInProvider.js
import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api/api';

const CheckInContext = createContext();
export const useCheckInContext = () => useContext(CheckInContext);

export const CheckInProvider = ({ children }) => {
  const [checkIns, setCheckIns] = useState([]);

  const fetchCheckIns = async () => {
    try {
      const response = await api.get('/checkins');
      setCheckIns(response.data);
    } catch (error) {
      console.error('Failed to fetch check-ins:', error);
    }
  };

  const addCheckIn = async (checkIn) => {
    try {
      const response = await api.post('/checkins', checkIn);
      setCheckIns([...checkIns, response.data]);
    } catch (error) {
      console.error('Failed to add check-in:', error);
    }
  };

  const updateCheckIn = async (id, updatedData) => {
    try {
      const response = await api.put(`/checkins/${id}`, updatedData);
      setCheckIns(checkIns.map(item => item.id === id ? response.data : item));
    } catch (error) {
      console.error('Failed to update check-in:', error);
    }
  };

  const deleteCheckIn = async (id) => {
    try {
      await api.delete(`/checkins/${id}`);
      setCheckIns(checkIns.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to delete check-in:', error);
    }
  };

  return (
    <CheckInContext.Provider value={{ checkIns, fetchCheckIns, addCheckIn, updateCheckIn, deleteCheckIn }}>
      {children}
    </CheckInContext.Provider>
  );
};