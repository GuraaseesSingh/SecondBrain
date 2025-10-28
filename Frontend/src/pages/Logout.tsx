import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout(){
  useEffect(() => {
    // Clear auth token and any other session data
    localStorage.removeItem("token");
  }, []);
  // Redirect to signin after clearing session
  return <Navigate to="/signin" replace />;
}


