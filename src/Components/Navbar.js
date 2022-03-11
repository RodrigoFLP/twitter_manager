import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="z-50 flex items-center p-4 fixed backdrop-blur-md w-full border-b-2 h-16">
      <Link to="/">
        <span className="font-bold text-lg">TWEET</span>
      </Link>
      <ul
        className="flex pl-6 space-x-4 font-semibold
    "
      >
        <li className="text-gray-800">
          <Link to="/">Home</Link>
        </li>
        <li className="text-gray-800">
          <Link to="/summary">Summary</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
