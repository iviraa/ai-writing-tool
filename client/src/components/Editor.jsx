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
      const response = await axios.post(
        "http://localhost:8000/api/spelling",

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-2">
      <div className="flex ">
        <div className="w-1/2 max-w-4xl pr-2">
          <div className="mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-48 p-4 mr-10 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Start writing here..."
            ></textarea>
          </div>
        </div>
        <div className="w-1/2 max-w-4xl pl-2 ">
          <div className="mb-6">
            <textarea
              readOnly
              className="w-full h-48 ml-1 p-4 border border-gray-700 rounded-lg focus:outline-none"
              placeholder="See the results here..."
              value={result}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-6">
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
    "w-1/3 text-white py-2 rounded-lg shadow-md transition duration-300 ";

  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-500",
    green: "bg-green-600 hover:bg-green-500",
    orange: "bg-orange-600 hover:bg-orange-500",
    red: "bg-red-600 hover:bg-red-500",
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
