import React from "react";
import Label from "../label";

const Input = ({ title, disabled, readOnly, ...rest }) => {
  return (
    <div className={`w-full flex justify-center items-center`}>
      <div className={`w-1/4 mr-3`}>
        <Label title={title ? title : `your-label`} />
      </div>
      <div className={`w-full relative`}>
        <input
          className={`focus:outline-none w-full rounded px-2 py-1 md:py-1 text-xs md:text-sm lg:text-base text-gray-500 font-inter border border-gray-300 read-only:cursor-not-allowed `}
          spellCheck={"false"}
          autoCapitalize={"off"}
          autoComplete={"off"}
          autoCorrect={"off"}
          readOnly={readOnly ? readOnly : false}
          disabled={disabled ? true : false}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
