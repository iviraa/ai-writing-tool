import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#14213D] to-[#000000] text-[#E5E5E5]">
      <div className="bg-gradient-to-r from-[#14213D] to-[#000000] py-16  px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#FCA311]">
          About Inkling
        </h2>
        <p className="text-lg mb-8">
          Inkling is designed to assist you in crafting better content with
          ease. Whether you're writing an article, a report, or just jotting
          down ideas, Inkling helps you stay on track and produce high-quality
          text.
        </p>
        <Link
          to="/editor"
          className="bg-[#FCA311] text-[#000000] py-2 px-6 rounded-lg shadow-lg hover:bg-[#E5E5E5] hover:text-[#14213D] transition duration-300"
        >
          Try it out
        </Link>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-[#14213D] to-[#000000] p-6 rounded-lg shadow-md border border-[#FCA311]">
            <h2 className="text-xl font-bold mb-4 text-[#FCA311]">
              Grammar Correction
            </h2>
            <p>
              Enhance the readability of your text with advanced grammar
              correction. Our Grammar Correction tool fixes grammatical
              mistakes, ensuring your sentences are clear and well-structured.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#14213D] to-[#000000] p-6 rounded-lg shadow-md border border-[#FCA311]">
            <h2 className="text-xl font-bold mb-4 text-[#FCA311]">
              Paraphraser
            </h2>
            <p>
              Rephrase sentences effortlessly with our Sentence Paraphraser.
              Generate alternative formulations of your text to improve clarity
              or vary your writing style.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#14213D] to-[#000000] p-6 rounded-lg shadow-md border border-[#FCA311]">
            <h2 className="text-xl font-bold mb-4 text-[#FCA311]">
              Spelling Checker
            </h2>
            <p>
              Identify and correct spelling errors with precision. Our Spelling
              Checker ensures your text is free from typos and misspellings,
              making your writing polished and professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
