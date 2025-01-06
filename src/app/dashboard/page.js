'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../context/AppContext"; // Your context provider

const Dashboard = () => {
  const { user } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if the user is not authenticated
    }
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>; // Show loading while redirecting
  }

  return <div>Welcome to your dashboard!</div>;
};

export default Dashboard;
