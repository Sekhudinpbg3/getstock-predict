import React from "react";

const Gap = ({ className }) => {
  return <div className={className ? className : `w-full h-10 bg-white`}></div>;
};

export default Gap;
