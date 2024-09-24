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
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#14213D] to-[#000000]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FCA311]"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#14213D] to-[#000000] text-[#E5E5E5] font-sans min-h-screen flex items-center justify-center">
      <section className="bg-gradient-to-r from-[#14213D] to-[#000000] text-center py-20 shadow-lg rounded-lg p-8 max-w-md w-full border border-[#FCA311]">
        <h2 className="text-4xl font-extrabold text-center text-[#FCA311] mb-6">
          Welcome to Inkling
        </h2>

        <div className="space-y-4">
          <button
            onClick={login}
            className="w-full py-2 px-4 bg-[#FCA311] text-[#000000] font-semibold rounded-lg shadow-md hover:bg-[#E5E5E5] hover:text-[#14213D] transition duration-300"
          >
            Login
          </button>

          <button
            onClick={login}
            className="w-full py-2 px-4 bg-[#14213D] text-[#E5E5E5] font-semibold rounded-lg shadow-md hover:bg-[#FCA311] hover:text-[#000000] border border-[#FCA311] transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
