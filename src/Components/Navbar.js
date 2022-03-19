import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="z-50 flex items-center p-4 fixed backdrop-blur-md w-full border-b-2 h-16">
      <Link to="/">
        <span className="font-bold text-lg">TWEET</span>
      </Link>
      <ul
        className="flex pl-6 space-x-2 font-semibold
    "
      >
        <Link to="/">
          <li className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md transition">
            Home
          </li>
        </Link>

        <Link to="/summary">
          <li className="text-gray-800 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md transition">
            Summary
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
