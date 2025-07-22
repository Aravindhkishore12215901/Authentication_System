import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-teal-600 text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome</h1><br></br>
      <h3 className="text-3xl font-bold mb-6">This is my Authentication Project!!</h3>
      <p className="text-lg mb-10">Join us to explore amazing features!</p>

      <div className="flex space-x-4">
        <Link to="/signup">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
