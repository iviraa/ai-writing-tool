import React from "react";
import { Link } from "react-router-dom";

import { usePrivy } from "@privy-io/react-auth";

const Navbar = () => {
  const { authenticated, ready, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="bg-white shadow-md container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Loading..</div>
      </div>
    );
  }
  return (
    <div className="bg-white shadow-md container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">Inkling</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 hover:underline">
              About
            </Link>
          </li>
          <li>
            {authenticated && (
              <Link to="/editor" className="text-blue-600 hover:underline">
                Editor
              </Link>
            )}
          </li>
          {authenticated ? (
            <div>
              <li>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white py-1.1 px-2 rounded-lg shadow-lg hover:bg-red-400 transition duration-300"
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
                  className="bg-red-600 text-white px-2 py-1.1 rounded-lg shadow-lg hover:bg-red-400 transition duration-300"
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
