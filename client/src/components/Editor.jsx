import React, { useState } from "react";
import axios from "axios";

const Editor = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  //paraphrase
  const checkParaphrase = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/paraphrase",
        {
          text,
        }
      );
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //grammar
  const checkGrammar = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/grammar", {
        text,
      });
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //spelling
  const checkSpelling = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/spelling", {
        text,
      });
      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#14213D] to-[#000000] flex flex-col items-center py-2">
      <div className="flex w-full max-w-6xl">
        <div className="w-1/2 pr-2 ml-2">
          <div className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-48 p-4 bg-[#E5E5E5] text-[#14213D] border border-[#FCA311] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCA311]"
              placeholder="Start writing here..."
            ></textarea>
          </div>
        </div>
        <div className="w-1/2 pl-2 mr-2">
          <div className="mb-6">
            <textarea
              readOnly
              className="w-full h-48 p-4 bg-[#E5E5E5] text-[#14213D] border border-[#FCA311] rounded-lg focus:outline-none"
              placeholder="See the results here..."
              value={result}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-6 w-full max-w-6xl">
        <Button onClick={checkSpelling} color="blue">
          Check Spelling
        </Button>
        <Button onClick={checkGrammar} color="green">
          Correct Grammar
        </Button>
        <Button onClick={checkParaphrase} color="orange">
          Paraphrase
        </Button>
      </div>
    </div>
  );
};

const Button = ({ onClick, children, color = "blue" }) => {
  const baseClasses =
    "w-1/3 text-[#000000] py-2 rounded-lg shadow-md transition duration-300 ";

  const colorClasses = {
    blue: "bg-[#FCA311] hover:bg-[#E5E5E5]",
    green: "bg-[#FCA311] hover:bg-[#E5E5E5]",
    orange: "bg-[#FCA311] hover:bg-[#E5E5E5]",
    red: "bg-[#FCA311] hover:bg-[#E5E5E5]",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses[color] || colorClasses.blue}`}
    >
      {children}
    </button>
  );
};

export default Editor;
