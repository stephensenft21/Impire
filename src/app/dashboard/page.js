'use client'
import React, { useEffect } from 'react';
import { CheckInProvider } from '../../context/CheckinProvider';
import { MealPlanProvider } from '../../context/MealPlanContext';
import { TrainingProvider } from '../../context/TrainingProvider';
import { ProfileProvider } from '../../context/ProfileContext';
import { QuestionsProvider } from '../../context/QuestionsContext';
import { CheckInTable } from '../../components/Check-Ins/CheckIns';
import { MealPlanView } from '../../components/MealPlan/MealPlanView';
import { TrainingProgramCard } from '../../components/TrainingProgram/TrainingProgramCard';
import { ProfileDetails } from '../../components/Profile/ProfileDetails';
import { QuestionsList } from '../../components/Questions/QuestionsList';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  document.title = 'Dashboard - Impire';
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <ProfileProvider>
          <ProfileDetails />
        </ProfileProvider>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CheckInProvider>
            <CheckInTable />
          </CheckInProvider>

          <MealPlanProvider>
            <MealPlanView />
          </MealPlanProvider>

          <TrainingProvider>
            <TrainingProgramCard program={{ name: 'Strength Training', description: '4-week plan', progress: 75 }} />
          </TrainingProvider>
        </div>

        <QuestionsProvider>
          <QuestionsList />
        </QuestionsProvider>
      </div>
    </div>
  );
};

export default Dashboard;
