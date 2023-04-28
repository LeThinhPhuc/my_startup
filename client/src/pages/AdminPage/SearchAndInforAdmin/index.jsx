import { createContext, useReducer , useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

const SearchAndInforAdmin = () => {
  const { state : { username , role } } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/admin/login';
  }

  
  return (
    <section className="h-[70px] flex flex-row items-center min-w-[600px] border-b-slate-300 border-b-[1px]">
      <form className="w-3/4 pl-3 ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm border-none text-gray-900   rounded-lg  focus:ring-white focus:outline-none h-1"
            placeholder="Search something..."
            required
          ></input>
        </div>
      </form>

      <button
        type="button"
        className="mr-3 ml-2 relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500  rounded-full top-2 right-2 dark:border-gray-900"></div>
      </button>
      <div className="h-8 w-0 border-r-[1.5px]"></div>
<div className="flex flex-row justify-between content-center items-center h-full" >
      <div className="flex items-center space-x-4 pl-5 min-w-[250px]">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          alt=""
        ></img>
        <div className="text-sm dark:text-white">
          <div className="font-semibold pb-1">{username?.toUpperCase()}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{role?role : ''}</div>
        </div>
        </div>
        <button onClick={handleLogout} className="w-min-[250px] h-full flex flex-row px-1 hover:bg-slate-200 hover:text-red-500 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-7"
          >
            <path
              fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd"
            />
          </svg>
          <div className="w-[70px]">Log out</div>
        </button>
      </div>
    </section>
  );
};
export default SearchAndInforAdmin;
