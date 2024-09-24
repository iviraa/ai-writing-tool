import React from "react";
import { Link } from "react-router-dom";

import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { authenticated, ready, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="bg-gradient-to-r from-[#14213D] to-[#000000] shadow-md px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#FCA311]">Loading..</div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-[#14213D] to-[#000000] shadow-md  px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#FCA311]">Inkling</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {authenticated && (
              <Link
                to="/editor"
                className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors"
              >
                Editor
              </Link>
            )}
          </li>
          {authenticated ? (
            <div>
              <li>
                <button
                  onClick={logout}
                  className="bg-[#FCA311] text-[#000000] py-1.1 px-2 rounded-lg shadow-lg hover:bg-[#E5E5E5] hover:text-[#14213D] transition duration-300"
                >
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <button
                  onClick={login}
                  className="bg-[#FCA311] text-[#000000] px-2 py-1.1 rounded-lg shadow-lg hover:bg-[#E5E5E5] hover:text-[#14213D] transition duration-300"
                >
                  Login
                </button>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
