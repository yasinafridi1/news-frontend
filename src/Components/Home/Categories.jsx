import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import toast from "react-hot-toast";
import SkeletonCard from "../Skeleton/Skeleton";
import NotFound from "../NotFound/NotFound";

const Categories = () => {
  const location = useLocation();
  const [defaultIndex, setDefault] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  function changeRoute(categoryName) {
    setDefault(false);
    fetchCategory(categoryName);
  }

  async function fetchCategory(categoryName) {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/category?name=${categoryName}`
      );
      if (response.data?.length > 0) {
        setCategoryData(response.data);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Internal server error");
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchCategory("arts");
  }, []);

  return (
    <div className="dark:bg-gray-800 pt-6">
      <div className="flex justify-center items-center gap-10">
        <NavLink
          to="arts"
          onClick={() => {
            setDefault(true);
            fetchCategory("arts");
          }}
          className={({}) =>
            `${
              defaultIndex
                ? "text-blue-500 underline underline-offset-8 dark:text-blue-300 "
                : " text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            } font-bold text-lg`
          }
        >
          Arts
        </NavLink>
        <NavLink
          to="science"
          onClick={() => {
            changeRoute("science");
          }}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-blue-500 underline underline-offset-8 dark:text-blue-300 "
                : " text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            } font-bold text-lg`
          }
        >
          Science
        </NavLink>
        <NavLink
          to="world"
          onClick={() => {
            changeRoute("world");
          }}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-blue-500 underline underline-offset-8 dark:text-blue-300 "
                : " text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            } font-bold text-lg`
          }
        >
          World
        </NavLink>
        <NavLink
          to="us"
          onClick={() => {
            changeRoute("us");
          }}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-blue-500 underline underline-offset-8 dark:text-blue-300 "
                : " text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            } font-bold text-lg`
          }
        >
          US
        </NavLink>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map((item) => <SkeletonCard key={item} />)
          ) : categoryData.length > 0 ? (
            categoryData.map((news, index) => <Card data={news} key={index} />)
          ) : (
            <div className="flex justify-center items-center w-[90vw] m-auto">
              <NotFound isHome={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
