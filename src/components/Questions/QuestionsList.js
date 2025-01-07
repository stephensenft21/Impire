import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useQuestionsContext } from '../../context/QuestionsContext';

export const QuestionsList = () => {
    const { questions, fetchQuestions } = useQuestionsContext();
  
    useEffect(() => {
      fetchQuestions();
    }, []);
  
    return (
      <motion.div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-4">Questions & Comments</h2>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="p-2 border-b">
              {question.text}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };