
// QuestionsProvider.js
import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api/api';

const QuestionsContext = createContext();
export const useQuestionsContext = () => useContext(QuestionsContext);

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await api.get('/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };

  const addQuestion = async (newQuestion) => {
    try {
      const response = await api.post('/questions', newQuestion);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error('Failed to add question:', error);
    }
  };

  const updateQuestion = async (id, updatedData) => {
    try {
      const response = await api.put(`/questions/${id}`, updatedData);
      setQuestions(questions.map(question => question.id === id ? response.data : question));
    } catch (error) {
      console.error('Failed to update question:', error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await api.delete(`/questions/${id}`);
      setQuestions(questions.filter(question => question.id !== id));
    } catch (error) {
      console.error('Failed to delete question:', error);
    }
  };

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestions, addQuestion, updateQuestion, deleteQuestion }}>
      {children}
    </QuestionsContext.Provider>
  );
};
