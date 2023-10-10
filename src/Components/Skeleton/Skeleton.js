import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="w-[350px]  rounded-md  relative overflow-hidden card">
      <Skeleton height={300} className="bg-red-400" />
    </div>
  );
};

export default SkeletonCard;
