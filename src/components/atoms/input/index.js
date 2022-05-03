import React from "react";
import Label from "../label";

const Input = ({ title, ...rest }) => {
  return (
    <div className={`w-full flex justify-center items-center`}>
      <div className={`w-1/4 mr-3`}>
        <Label title={title ? title : `your-label`} />
      </div>
      <div className={`w-full relative`}>
        <input
          className={`focus:outline-none w-full rounded px-2 py-0.5 md:py-1 text-xs md:text-sm lg:text-base text-gray-500 font-inter border border-gray-300`}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
