import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(      
      <div className= "bg-white shadow-md container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Inkling</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to='/' className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link to='/about' className="text-blue-600 hover:underline">About</Link></li>
            <li><Link to='/editor' className="text-blue-600 hover:underline">Editor</Link></li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;
