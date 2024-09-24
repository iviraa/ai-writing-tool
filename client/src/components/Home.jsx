import React from "react";
import { Link } from "react-router-dom";

// colors yelo: FCA311, blue: 14213D, black: 000000, white E5E5E5

const Home = () => {
  return (
    <div className="bg-[#000000] text-[#E5E5E5] font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#14213D] to-[#000000] text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-[#FCA311] mb-4">
            Inkling: Your AI Writing Assistant
          </h1>
          <p className="text-xl text-[#E5E5E5] mb-8">
            Write with ease and precision
          </p>

          <Link
            to="/editor"
            className="bg-[#FCA311] text-[#000000] py-2 px-6 rounded-lg shadow-lg hover:bg-[#E5E5E5] hover:text-[#14213D] transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
