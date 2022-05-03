import React from "react";

const TextDinamis = ({
  title,
  textLight,
  fontFamily,
  textColor,
  className,
  semibold,
}) => {
  const textType = textLight
    ? "font-light text-xs md:text-sm lg:text-base cursor-default"
    : semibold
    ? "font-semibold text-xs md:text-sm lg:text-base cursor-default"
    : "font-normal text-xs md:text-sm lg:text-base cursor-default";
  const font = fontFamily ? fontFamily : "font-inter";
  const color = textColor ? textColor : "text-gray-500";

  return (
    <p className={className ? className : `${font} ${color} ${textType}`}>
      {title ? title : `your-dinamic-text`}
    </p>
  );
};

export default TextDinamis;
