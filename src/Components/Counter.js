import React from "react";
import "./pie.css";

export const Counter = ({ count }) => {
  const limit = 100;
  const warning = 20;
  const isWarning = limit - count <= warning;
  const isFull = limit - count <= 0;

  const percentage = (count / limit) * 100;

  const currentState =
    limit - count <= -10
      ? "limit"
      : limit - count <= 0
      ? "full"
      : limit - count <= warning
      ? "warning"
      : "normal";

  const vars = {
    normal: {
      textColor: "text-gray-600",
      color: "blue, blue",
      outerSize: "22px",
      innerSize: "18px",
    },
    warning: {
      textColor: "text-gray-600",
      color: "yellow, yellow",
      outerSize: "28px",
      innerSize: "24px",
    },
    full: {
      textColor: "text-red-600",
      color: "red, red",
      outerSize: "28px",
      innerSize: "24px",
    },
    limit: {
      textColor: "text-red-600",
      color: "transparent, transparent",
      outerSize: "28px",
      innerSize: "24px",
    },
  };

  const data = vars[currentState];

  return (
    <div
      class="piechart"
      style={{
        backgroundImage: `conic-gradient(${data.color} ${percentage}%, #e2e2e2 ${percentage}%)`,
        width: `${data.outerSize}`,
        height: `${data.outerSize}`,
      }}
    >
      <div
        class="hole"
        style={{
          width: `${data.innerSize}`,
          height: `${data.innerSize}`,
        }}
      ></div>
      {isWarning && (
        <span className={`text-xs ${data.textColor} `}> {limit - count}</span>
      )}
    </div>
  );
};

export default Counter;
