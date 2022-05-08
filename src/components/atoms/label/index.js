import React from "react";

const Label = ({
  title,
  header,
  labelBold,
  customFont,
  customColor,
  className,
}) => {
  const label_style = header
    ? "font-semibold text-sm md:text-base md:font-bold lg:text-base lg:font-extrabold 2xl:text-xl 2xl:font-extrabold underline underline-offset-4 md:decoration-2"
    : labelBold
    ? "font-bold text-sm lg:text-base 2xl:text-lg"
    : "font-normal md:font-semibold text-xs md:text-sm lg:text-base";
  const font = customFont ? customFont : header ? "font-raleway" : "font-inter";
  const color = customColor
    ? customColor
    : header
    ? "text-green-500"
    : "text-gray-500";

  return (
    <p className={className ? className : `${font} ${color} ${label_style} `}>
      {title ? title : `your-label`}
    </p>
  );
};

export default Label;
