import React from "react";

export const PriceCard = ({ title }) => {
  return (
    <div className="text-center rounded-md border-2 border-gray-200 flex flex-col">
      <div className="p-4 font-bold">{title}</div>
      <div className="p-4 bg-slate-100">
        <ul className="space-y-2 divide-y-2">
          <li>200 text tweets/month</li>
          <li>100 image tweets/month</li>
          <li>25 video tweets/month</li>
        </ul>
      </div>
      <div className="p-4">
        <button className="p-2  border-2 bg-gray-100 border-gray-200 w-full rounded-md font-semibold">
          Order
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
