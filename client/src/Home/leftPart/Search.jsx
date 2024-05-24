import React from "react";

function Search() {
  return (
    <>
      <form action="">
        <div className="mb-4 px-2">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md bg-slate-800 py-2.5 pe-10 px-2 outline-none border-b-2 focus-visible:border-b-green-400 focus-visible:bg-transparent shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-100"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
