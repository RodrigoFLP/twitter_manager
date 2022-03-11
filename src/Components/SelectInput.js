import React from "react";
import SelectorIcon from "../assets/icons/Selector";

export const SelectInput = ({
  label,
  options,
  initialValue,
  setValue,
  error,
}) => {
  return (
    <div id="select-container" className="relative flex-grow">
      <select
        onChange={(e) => {
          setValue((previousDate) => ({
            ...previousDate,
            [label === "a.m./p.m." ? "ampm" : label]: options
              .map(String)
              .indexOf(e.target.value),
          }));
        }}
        className={`relative form-select form-select-lg appearance-none block pl-2 pr-12 pt-5 pb-1 text-lg font-normal text-gray-700 
        bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white ${
          error
            ? "focus:outline-red-500 border-2 border-red-500"
            : "focus:outline-blue-400 border-gray-300 border border-solid "
        } w-full peer`}
        aria-label=".form-select-lg example"
        defaultValue={options[initialValue]}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
      <label
        className={`z-40 absolute top-0 pointer-events-none text-xs px-2 pt-2 ${
          error
            ? "peer-focus:text-red-500 text-red-500"
            : "peer-focus:text-blue-400"
        }  transition-colors`}
      >
        {label}
      </label>
      <SelectorIcon
        className={`w-6 fill-gray-600 absolute top-0 right-2 ${
          error
            ? "peer-focus:fill-red-500 fill-red-500"
            : "peer-focus:text-blue-400"
        } peer-focus:fill-blue-400 h-14 pointer-events-none`}
      />
    </div>
  );
};

export default SelectInput;
