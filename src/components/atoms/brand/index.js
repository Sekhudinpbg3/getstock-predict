import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ title, fontFamily, href, className }) => {
  const font = fontFamily ? fontFamily : "font-raleway";

  return (
    <Link
      to={href ? href : `#`}
      className={
        className
          ? className
          : `${font} text-base text-green-500 font-semibold md:font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:font-extrabold hover:opacity-90`
      }
    >
      {title ? title : `your-brand`}
    </Link>
  );
};

export default Brand;
