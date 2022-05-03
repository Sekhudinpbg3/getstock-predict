import React from "react";

const Button = ({
  title,
  fontFamily,
  primary,
  disabled,
  width,
  height,
  ...props
}) => {
  const btn_style = primary
    ? "text-white bg-green-500 lg:hover:opacity-90 active:bg-green-600"
    : "text-green-500 bg-white lg:hover:bg-gray-50 active:bg-gray-100 border-2 border-green-500 ";

  const btn_disable = disabled
    ? "disabled:text-white disabled:bg-gray-400 disabled:active:bg-gray-500 disabled:cursor-not-allowed"
    : null;
  const font = fontFamily ? fontFamily : "font-raleway";
  const btnWidth = width ? width : "w-full";
  const btnHeight = height ? height : "py-1.5";

  return (
    <button
      className={`${font} text-xs lg:text-sm xl:text-base font-semibold ${btnWidth} ${btnHeight} rounded ${
        disabled ? btn_disable : btn_style
      } `}
      disabled={disabled ? true : false}
      {...props}
    >
      {title ? title : `your-btn`}
    </button>
  );
};

export default Button;
