import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { PriceCard } from "../Components/PriceCard";

export const Home = () => {
  return (
    <>
      <main className=" p-4 space-y-6 pt-24">
        <div className="flex flex-col items-center">
          <div className="text-6xl md:text-8xl font-bold p-6 pb-2 text-center md:w-4/6">
            <div className="">Manage your twitter.</div>
          </div>
          <div className="md:w-2/6 md:p-4">
            {" "}
            <div className="text-xl p-6 pt-2  text-center ">
              Start with our basic plan
            </div>
            <Link to="/signup">
              <button
                className="bg-black text-white font-semibold p-3 rounded-md w-full"
                type="submit"
              >
                Start managing
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
          <PriceCard title="Basic" />
          <PriceCard title="Advanced" />
        </div>
      </main>
    </>
  );
};

export default Home;
