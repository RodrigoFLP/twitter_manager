import React from "react";

export const DropdownButton = () => {
  return (
    <div>
      <div class="group inline-block relative">
        <button class="bg-white text-gray-700 font-semibold py-1 px-1 rounded-full inline-flex items-center">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block z-10 -left-48 rounded-lg backdrop-blur-md border-2 border-gray-300">
          <li class="">
            <a
              class="  hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
              href="#a"
            >
              Delete
            </a>
          </li>
          <li class="">
            <a
              class=" hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
              href="#g"
            >
              Two
            </a>
          </li>
          <li class="">
            <a
              class=" hover:bg-white hover:bg-opacity-50 py-2 px-4 block whitespace-no-wrap"
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
