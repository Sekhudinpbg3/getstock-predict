import React from "react";

const TextDinamis = ({
  title,
  textLight,
  fontFamily,
  textColor,
  className,
  semibold,
  textAlign,
  wfull,
}) => {
  const textType = textLight
    ? "font-light text-xs md:text-sm lg:text-base cursor-default"
    : semibold
    ? "font-semibold text-xs md:text-sm lg:text-base cursor-default"
    : "font-normal text-xs md:text-sm lg:text-base cursor-default";
  const font = fontFamily ? fontFamily : "font-inter";
  const color = textColor ? textColor : "text-gray-500";
  const justify = textAlign ? textAlign : "text-left";
  const widthContainer = wfull ? "w-full" : "";

  return (
    <div className={widthContainer}>
      {title ? (
        <p
          className={
            className ? className : `${font} ${color} ${textType} ${justify}`
          }
        >
          {title}
        </p>
      ) : (
        <div className={"px-2 py-1 w-full bg-gray-100 animate-pulse"}>
          <p className={className ? className : `${font} ${color} ${textType}`}>
            Loading...
          </p>
        </div>
      )}
    </div>
  );
};

export default TextDinamis;
