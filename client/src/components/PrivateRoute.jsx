import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { authenticated, ready } = usePrivy();

  if (!ready) {
    return (
      <div className="bg-white shadow-md container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Loading..</div>
      </div>
    );
  }
  return authenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
