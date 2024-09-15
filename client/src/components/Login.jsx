import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login, ready, authenticated } = usePrivy();
  const navigate = useNavigate();

  useEffect(() => {
    if (ready && authenticated) {
      navigate("/editor");
    }
  }, [ready, authenticated, navigate]);

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-green-300">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen flex items-center justify-center">
      <section className="bg-gradient-to-r from-blue-300 to-green-300 text-center py-20 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-center text-white mb-6">
          Welcome to Inkling
        </h2>

        <div className="space-y-4">
          <button
            onClick={login}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition duration-300"
          >
            Login
          </button>

          <button
            onClick={login}
            className="w-full py-2 px-4 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
