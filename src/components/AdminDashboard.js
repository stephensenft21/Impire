"use client";

import React, { useState } from "react";
import { useMerchContext } from "../context/MerchProvider";
import { useTrainingContext } from "../context/TrainingProvider";
import { useFeedbackContext } from "../context/FeedbackProvider";
import MerchTable from "./MerchTable";
import TrainingTable from "./TrainingTable";
import FeedbackTable from "./FeedbackTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("merch");

  const tabs = [
    { key: "merch", label: "Manage Products" },
    { key: "training", label: "Manage Training" },
    { key: "feedback", label: "Moderate Feedback" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 mx-2 rounded ${
              activeTab === tab.key
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "merch" && <MerchTable />}
        {activeTab === "training" && <TrainingTable />}
        {activeTab === "feedback" && <FeedbackTable />}
      </div>
    </div>
  );
};

export default AdminDashboard;
