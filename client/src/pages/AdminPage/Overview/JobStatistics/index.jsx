import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import BarChart from "../BarChart";

const JobStatistics = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <main>
      <section class="flex justify-between px-4 py-2 ">
        <p class="font-semibold py-1">Job Statistics</p>
        <div class="flex w-[300px] ">
          <p class="text-xs py-[9px] pr-1">Filter:</p>
          <Datepicker
            toggleIcon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                class="w-5 h-5 stroke-slate-400 pb-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            )}
            placeholder="select range date"
            displayFormat={"DD/MM/YYYY"}
            startFrom={new Date("2022-01-01")}
            separator={"-"}
            useRange={false}
            value={value}
            onChange={handleValueChange}
            inputClassName="placeholder:text-[9px] border-[1px] border-slate-300 focus:outline-0 focus:border-0 focus:transition-timing-function: cubic-bezier(0, 0, 0, 0); text-[9px]  pr-[5px] h-4 "
            containerClassName="w-[200px] pt-1  "
            
          />
          <button
            type="button"
            class="flex items-center h-6 ml-2 px-3 mt-2 focus:transition-none text-xs font-medium text-center focus:outline-0 text-white bg-indigo-700 hover:bg-indigo-800  rounded-[5px]  dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-5 h-5 pr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Export
          </button>
        </div>
      </section>
      {/* JOBS STATISTICS */}
      <section>
        <div class="grid grid-rows-2 grid-flow-col  h-[350px] w-full px-6 py-3">
          {/* 1 */}
          <div class="row-span-1  border-l-[1.5px] border-t-[1.5px] border-slate-300 rounded-ss-md flex items-center  pl-5 -pr-5">
            
            <div class="text-sm dark:text-white">
              <div class="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Total Employees
              </div>
              <div class="font-bold pb-1  text-xl flex">
                300{" "}
                <div class="ml-1 text-[10px] font-medium "><mark class="p-[1px] bg-green-300  text-green-500" >+49%</mark></div>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Employees
              </div>
            </div>
          </div>
          {/* 2 */}
          <div class="row-span-1 border-l-[1.5px] border-b-[1.5px] border-t-0 border-slate-300 rounded-es-md flex items-center  pl-5 -pr-5">
          
          <div class="text-sm dark:text-white">
              <div class="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
              Job View
              </div>
              <div class="font-bold pb-1  text-xl flex">
              4400{" "}
                <div class="ml-1 text-[10px] font-medium "><mark class="p-[1px] bg-green-300  text-green-500" >+49%</mark></div>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
              viewers
              </div>
            </div>
          </div>
          {/* 3 */}
          <div class="pl-5 -pr-5 row-span-1 border-t-[1.5px] border-slate-300 flex items-center "><div class="text-sm dark:text-white">
              <div class="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
              Resigned Employees
              </div>
              <div class="font-bold pb-1  text-xl flex">
              23{" "}
                <div class="ml-1 text-[10px] font-medium "><mark class="p-[1px] bg-red-300  text-red-500" >-49%</mark></div>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
              Employees
              </div>
            </div></div>
            {/* 4 */}
          <div class="pl-5 -pr-5 row-span-1 border-b-[1.5px] border-slate-300 flex items-center "><div class="text-sm dark:text-white">
              <div class="text-xs font-se text-gray-700 pb-2 dark:text-gray-400">
                Job Aplied
              </div>
              <div class="font-bold pb-1  text-xl flex">
                1266{" "}
                <div class="ml-1 text-[10px] font-medium "><mark class="p-[1px] bg-green-300  text-green-500" >+49%</mark></div>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400">
                Applicants
              </div>
            </div></div>
            {/* Chart  job statistics*/}
          <div class="row-span-2 col-span-4 border-[1.5px] border-slate-300 rounded-r-md flex justify-center items-center">
            <BarChart/>
          </div>
        </div>
      </section>
    </main>
  );
};
export default JobStatistics;
