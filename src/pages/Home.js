import React from "react";
import Navbar from "../Components/Navbar";
import { PriceCard } from "../Components/PriceCard";

export const Home = () => {
  return (
    <>
      <main className=" p-4 space-y-6">
        <div>
          <div className="text-6xl font-bold p-6 pb-2  text-center">
            Schedule your tweets.
          </div>
          <div className="text-xl p-6 pt-2  text-center">
            Start with our basic plan
          </div>
          <button
            className="bg-black text-white font-semibold p-3 rounded-md w-full"
            type="submit"
          >
            Start scheduling
          </button>
        </div>
        <PriceCard title="Basic" />
        <PriceCard title="Advanced" />
      </main>
    </>
  );
};

export default Home;
