import React from "react";

export const TitleBar = ({ title, render }) => {
  return (
    <div className="border-2 border-gray-200 p-4 rounded-md font-semibold flex space-x-4">
      {render({ color: "#b2b2b2" })}
      <span>{title}</span>
    </div>
  );
};

export default TitleBar;
