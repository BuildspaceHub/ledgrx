import { useEffect, useState } from "react";
import UserService from "../apis/user";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function ProtectedRoute() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        setIsLoading(true);
        const user = await UserService.getUserData();
        setCurrentUser(user);
      } catch (err) {
        console.error("Auth verification failed:", err.message);
        setCurrentUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size={32} />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
