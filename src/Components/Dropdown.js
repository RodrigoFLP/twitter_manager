import React from "react";

export const DropdownButton = () => {
  return (
    <div>
      <div className="group inline-block relative">
        <button className="bg-white text-gray-700 font-semibold py-1 px-1 rounded-full inline-flex items-center">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-40 -left-48 rounded-lg backdrop-blur-md border-2 border-gray-300">
          <li className="">
            <a
              className="  hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
              href="#a"
            >
              Delete
            </a>
          </li>
          <li className="">
            <a
              className=" hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
              href="#g"
            >
              Two
            </a>
          </li>
          <li className="">
            <a
              className=" hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
              href="#h"
            >
              Three is the magic number
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownButton;
