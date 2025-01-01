import React, { useEffect } from "react";
import { useFeedbackContext } from "../context/FeedbackProvider";

const FeedbackTable = () => {
  const { feedbackList, fetchFeedback, deleteFeedback } = useFeedbackContext();

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Moderate Feedback</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td className="border px-4 py-2">{feedback.user}</td>
              <td className="border px-4 py-2">{feedback.message}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteFeedback(feedback.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
