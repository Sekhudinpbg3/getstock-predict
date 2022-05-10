import React from "react";

const Loading = ({ width, color, spaceX }) => {
  const wd = width ? width : "h-1 md:h-1.5 xl:h-2 w-1 md:w-1.5 xl:w-2";
  const clr = color ? color : "bg-gray-500";
  const spX = spaceX ? spaceX : "space-x-2";
  return (
    <div className={`${spX} flex animate-pulse`}>
      <div className={`${wd} ${clr} rounded-full`}></div>
      <div className={`${wd} ${clr} rounded-full`}></div>
      <div className={`${wd} ${clr} rounded-full`}></div>
    </div>
  );
};

export default Loading;
