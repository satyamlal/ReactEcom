import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-[60px] bg-[#1A202C] px-[70px] text-white flex items-center justify-between">
      <Link to="/" className="text-4xl font-bold">
        <strong>Home</strong>
      </Link>

      <div className="text-center text-sm md:text-base">
        🚀 Big Summer Sale! 20% off all items until July 15th. 🚀
      </div>

      <div className="flex space-x-4">
        <a href="#" rel="noopener noreferrer">
          <FaFacebook className="h-5 w-5 hover:text-blue-500 transition" />
        </a>
        <a href="#" rel="noopener noreferrer">
          <FaTwitter className="h-5 w-5 hover:text-blue-400 transition" />
        </a>
        <a href="#" rel="noopener noreferrer">
          <FaInstagram className="h-5 w-5 hover:text-pink-500 transition" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
