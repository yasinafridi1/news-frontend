import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-800  ">
      <div className="flex justify-center items-center w-1/2 mx-auto py-10">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            We are <span className="text-blue-600">Top News</span> providers
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Top News providers are the best and fair news provider. We provide
            daily news related to science, arts and many more.
          </p>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800"
              to="/arts"
            >
              Get started
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
