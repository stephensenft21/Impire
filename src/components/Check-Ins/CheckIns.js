import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useCheckInContext } from "../../context/CheckinProvider";
// CheckInTable Component
export const CheckInTable = () => {
  const { checkIns, fetchCheckIns } = useCheckInContext();

  useEffect(() => {
    fetchCheckIns();
  }, []);

  return (
    <motion.div
      className="p-6 bg-gray-900 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Check-Ins</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="text-purple-400">
              <th className="p-2">Date</th>
              <th className="p-2">Weight</th>
              <th className="p-2">Inches</th>
              <th className="p-2">Photo</th>
            </tr>
          </thead>
          <tbody>
            {checkIns.map((checkIn) => (
              <tr key={checkIn.id} className="border-t">
                <td className="p-2">{checkIn.checkin_date}</td>
                <td className="p-2">{checkIn.weight} lbs</td>
                <td className="p-2">{checkIn.inches} in</td>
                <td className="p-2">
                  <img
                    src={checkIn.photo_url}
                    alt="Check-In"
                    className="w-12 h-12 rounded-lg"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

// MealPlanViewer Component

// TrainingProgramCard Component

// ProfileDetails Component

// QuestionsList Component
