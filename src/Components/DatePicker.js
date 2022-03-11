import React, { useState } from "react";
import { SelectInput } from "./SelectInput";

import moment from "moment";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "october",
  "december",
];

export const DatePicker = () => {
  const currentDate = new Date();
  const currentMinute = currentDate.getMinutes() - 1;
  const currentHours =
    currentDate.getHours() - 1 > 12
      ? currentDate.getHours() - 13
      : currentDate.getHours() - 1;

  const [date, setDate] = useState({
    month: currentDate.getMonth(),
    day: currentDate.getDate() - 1,
    year: 0,
    hour:
      currentMinute > 54
        ? currentHours !== 12
          ? currentHours + 1
          : 1
        : currentHours,
    minute: currentMinute <= 54 ? currentMinute + 5 : currentMinute,
    ampm: currentDate.getHours() - 1 > 12 ? 1 : 0,
  });

  //populate options
  const currentYear = currentDate.getFullYear();
  const currentDays = new Date(currentYear, date.month + 1, 0).getDate();
  const availableDays = Array.from({ length: currentDays }, (_, i) => i + 1);
  const availableHours = Array.from({ length: 12 }, (_, i) => i + 1);
  const availableMinutes = Array.from({ length: 60 }, (_, i) => i);
  const availableYears = Array.from({ length: 2 }, (_, i) => currentYear + i);
  const ampmValues = ["AM", "PM"];

  const selectedDate = moment(
    `${availableDays[date.day]}.${date.month + 1}.${
      availableYears[date.year]
    } ${availableHours[date.hour]}:${availableMinutes[date.minute]} ${
      ampmValues[date.ampm]
    }`,
    "DD.MM.YYYY h:mm:ss a"
  );

  const isBefore = selectedDate.isBefore(moment());

  const error = !selectedDate.isValid() || isBefore;

  return (
    <div id="picker-body">
      <form className="space-y-4">
        <div id="date-picker" className="space-y-1">
          <div className="text-sm">Date</div>
          <div className="flex flex-row space-x-3 ">
            <SelectInput
              label="month"
              options={months}
              initialValue={date.month}
              setValue={setDate}
              error={error}
            />
            <SelectInput
              label="day"
              options={availableDays}
              initialValue={date.day}
              setValue={setDate}
              error={error}
            />
            <SelectInput
              label="year"
              options={availableYears}
              initialValue={date.year}
              setValue={setDate}
              error={error}
            />
          </div>
        </div>
        <div id="time-picker" className="space-y-1">
          <div className="text-sm">Time</div>
          <div className="flex flex-row space-x-3 ">
            <SelectInput
              label="hour"
              options={availableHours}
              initialValue={date.hour}
              setValue={setDate}
            />
            <SelectInput
              label="minute"
              options={availableMinutes}
              initialValue={date.minute}
              setValue={setDate}
            />
            <SelectInput
              label="a.m./p.m."
              options={["AM", "PM"]}
              initialValue={date.ampm}
              setValue={setDate}
            />
          </div>
        </div>
      </form>
      <div className={`text-sm pt-2 ${error && "text-red-500"}`}>
        {selectedDate.format("MMMM Do YYYY, h:mm:ss A")}
      </div>
    </div>
  );
};

export default DatePicker;
