import React from "react";

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-purple-400">{feedback.name}</h2>
      <p className="text-gray-400 italic">&quot;{feedback.comment}&quot;</p>
    </div>
  );
};

export default FeedbackCard;
