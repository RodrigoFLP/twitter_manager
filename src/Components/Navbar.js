import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex border-b-2 items-center p-4">
      <span className="font-extrabold text-lg">TWEET</span>
      <ul
        className="flex pl-6 space-x-2 font-semibold
    "
      >
        <li className="text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="text-black">
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
