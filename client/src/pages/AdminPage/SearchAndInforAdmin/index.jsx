const SearchAndInforAdmin = () => {
  return (
    <section class="h-[70px] flex items-center min-w-[600px] border-b-slate-300 border-b-[1px]">
      <form class="w-3/4 pl-3 ">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm border-none text-gray-900   rounded-lg  focus:ring-white focus:outline-none h-1"
            placeholder="Search something..."
            required
          ></input>
        </div>
      </form>

      <button
        type="button"
        class="mr-3 ml-2 relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-6 h-6 stroke-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <span class="sr-only">Notifications</span>
        <div class="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500  rounded-full top-2 right-2 dark:border-gray-900"></div>
      </button>
      <div class="h-8 w-0 border-r-[1.5px]"></div>
<div class="flex justify-between items-center" >
      <div class="flex items-center space-x-4 pl-5 min-w-[250px]">
        <img
          class="w-9 h-9 rounded-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          alt=""
        ></img>
        <div class="text-sm dark:text-white">
          <div class="font-semibold pb-1">Thanh Tai</div>
          <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
        </div>
        </div>
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          class="w-5 h-5 stroke-slate-400 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        </button>
      </div>
    </section>
  );
};
export default SearchAndInforAdmin;
