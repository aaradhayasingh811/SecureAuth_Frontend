import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {

  const { user, loading } = useAuth();
  console.log("ProtectedRoute user:", user, "loading:", loading);
  if (loading) return <div className="text-center py-6">Loading...</div>;
  if (!user) return <Navigate to="/unauthorized" replace />;
  return children;
}
