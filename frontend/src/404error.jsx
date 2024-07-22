import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/home"
          className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
