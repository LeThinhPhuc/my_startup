import React, { useEffect, useState } from "react";
import DoughnutChart from "../DoughnutChart";
import axios from "axios";
import ReactPaginate from "react-paginate";
import EmployService from "../../../../services/employSevice";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr
            key={item._id}
            className="bg-white  border-b-[1.5px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="flex items-center px-6 py-1 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div
                style={{
                  backgroundColor:
                    "#" +
                    (Math.random().toString(16) + "000000").substring(2, 8),
                }}
                className={`w-12 h-12 relative flex justify-center items-center rounded-full 
                bg-[${
                  "#" + (Math.random().toString(16) + "000000").substring(2, 8)
                }] text-xl text-white uppercase`}
              >
                {(item.personal.firstName + " " + item.personal.lastName)
                  .split(" ")
                  .reduce((acc, cur) => (acc += cur[0]), "")}
              </div>

              <div className="text-xs font-semibold pl-3">
                {item.personal.firstName + " " + item.personal.lastName}
              </div>
            </th>
            <td className="px-6 py-4 text-xs">{item.coverLetter}</td>
            <td className="px-6 py-4">
              <div className="text-xs ">{item.teamLead} </div>
            </td>
            <td className="pl-6 pr-2 py-4">
              {item.status == "ON" ? (
                <mark className="text-xs px-3 py-2 font-semibold bg-green-100 text-green-600 rounded-md">
                  Onboarding
                </mark>
              ) : (
                <mark className="text-xs px-3 py-2 font-semibold bg-orange-100 text-orange-600 rounded-md">
                  Offboarding
                </mark>
              )}
            </td>
          </tr>
        ))}
    </>
  );
}



function EmployeesStatus({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [employees, setEmployees] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  
  useEffect(() => {
    const handleFetchJobs = async () => {
      const response = await EmployService.getAll();
      setEmployees(response.data.data);
    };
    handleFetchJobs();
  }, []);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentEmployeess = employees.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(employees.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="px-4 py-2 flex justify-between">
        <div className=" flex flex-col  w-2/3">
          <div className="flex items-center justify-between pb-2 bg-white dark:bg-gray-900  ">
            <div>
              <p className="font-semibold">Employee Status</p>
            </div>

            <button
              type="button"
              className="flex  text-slate-500 bg-white border border-gray-200 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              <div className="pt-[1px]">Filter & Sort</div>
            </button>
          </div>
          <div className="relative overflow-x-auto border-[1.5px] rounded-lg ">
            <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-500  bg-gray-100 border-b-[1.5px] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 pl-5 py-3 font-semibold">
                    Employee Name
                  </th>
                  <th scope="col" className="px-3 pl-5 py-3 font-semibold">
                    Job Title
                  </th>
                  <th scope="col" className="px-3 pl-5 py-3 font-semibold">
                    Team Lead
                  </th>
                  <th scope="col" className="px-3  pl-5 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <Items currentItems={currentEmployeess} />
              </tbody>
            </table>
            
            <nav
              className="flex items-center justify-between py-2 pt-1 pl-2"
              aria-label="Table navigation"
            >
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {endOffset >= employees.length
                    ? `${itemOffset + 1}-${employees.length}`
                    : `${itemOffset + 1}-${endOffset}`}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {employees.length}
                </span>
              </span>

              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                marginPagesDisplayed={2}
                renderOnZeroPageCount={null}
                className="inline-flex items-center -space-x-px"
                pageLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                nextLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                previousLinkClassName="px-2 py-2 text-xs text-gray-500 bg-white  border-gray-300 hover:bg-slate-100 hover:rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                activeLinkClassName="px-2 py-2 text-xs text-gray-800 bg-white font-bold"
              />
            </nav>
          </div>
        </div>
        <div className="w-1/3 pl-7 pr-2 ">
          <p className="font-semibold pt-1 pb-4">Working Format</p>
          <div className="border-[1.5px] rounded-lg h-[356px] flex justify-center items-center">
            <DoughnutChart />
          </div>
        </div>
      </section>
    </>
  );
}
export default EmployeesStatus;
