import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/2">
        <Link to="/">
          <span className="p-4  text-md font-bold  block">TWEET</span>
        </Link>
        <span className="p-4 text-4xl font-bold block md:text-6xl  md:p-14">
          Start managing your tweets from this shitty site right now
        </span>
      </div>
      <form className="md:w-1/2 p-4 space-y-4 md:p-14">
        <input
          class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-4 ring-1 ring-slate-200 shadow-sm"
          type="email"
          aria-label="Email"
          placeholder="Email"
        />
        <button
          type="/submit"
          className="bg-blue-600 w-full p-3 text-white rounded-md focus:ring-2 hover:bg-blue-700"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
