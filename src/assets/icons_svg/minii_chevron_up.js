import React from "react";

const MiniChevronUp = ({className='h-5 w-5 fill-gray-500', pointer='cursor-pointer'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${pointer}`}
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default MiniChevronUp;