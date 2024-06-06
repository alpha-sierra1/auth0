// pages/dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated on page load
    const isAuthenticated = true; // You can implement your authentication check here
    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      router.push("/login");
    }
  }, [router]); // Add router to the dependency array

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
};

export default Dashboard;
