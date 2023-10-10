import React from "react";

const Card = ({ data }) => {
  return (
    <a
      href={data.url}
      target="_blank"
      className="w-[350px] bg-gray-300 rounded-md dark:bg-slate-300  relative overflow-hidden card"
    >
      <img
        className="h-full w-full"
        src={data.imageUrl}
        alt="News cover picture"
      />
      <div className="textData text-slate-200">
        <h4 className="font-bold text-lg text-slate-300">{data.tittle}</h4>
        <p className="text-slate-400 text-sm">{data.description}</p>
      </div>
    </a>
  );
};

export default Card;
