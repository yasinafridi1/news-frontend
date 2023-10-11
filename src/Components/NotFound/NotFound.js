import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ isHome }) => {
  return (
    <div className="h-full dark:bg-gray-800">
      <div className="flex h-full">
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
          <header className="mb-auto flex justify-center z-50 w-full py-4">
            <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
              <Link
                to="/"
                className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
              >
                Top News
              </Link>
            </nav>
          </header>

          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              404
            </h1>
            <h1 className="block text-2xl font-bold text-white"></h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Oops, something went wrong.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find your {`${isHome ? "data" : "page"}`}.
            </p>
            {isHome ? (
              ""
            ) : (
              <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <Link
                  to=""
                  className="border px-4 py-1 border-blue-700 rounded-md text-blue-700 hover:bg-blue-700 hover:text-slate-100 transition ease-in-out duration-300"
                >
                  Go Back
                </Link>
              </div>
            )}
          </div>

          {isHome ? (
            ""
          ) : (
            <footer className="mt-auto text-center py-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-gray-500">
                  © All Rights Reserved. 2023.
                </p>
              </div>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
