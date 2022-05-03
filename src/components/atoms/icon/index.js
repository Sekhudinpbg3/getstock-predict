import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ src, href, alt, className, hover }) => {
  const customClassName = className ? className : "w-10 h-10 bg-white";
  const isHovers = hover ? "lg:hover:p-0.5" : "";

  return (
    <div className={`${customClassName} ${isHovers}`}>
      <Link to={href ? href : `#`}>
        <img src={src} alt={alt ? alt : `your-icon`} />
      </Link>
    </div>
  );
};

export default Icon;
