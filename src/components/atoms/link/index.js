import React from "react";
import { Link } from "react-router-dom";

const TextLink = ({
  title,
  href,
  textLink,
  textSize,
  customColor,
  ...props
}) => {
  const linkStyle = customColor
    ? `${customColor} lg:hover:underline lg:hover:underline-offset-2 lg:hover:opacity-80`
    : `text-green-500 lg:hover:text-green-400 lg:active:text-green-600`;
  const size = textSize ? textSize : "text-xs md:text-sm lg:text-base";

  return (
    <div>
      {title && textLink ? (
        <div className={`inline-flex items-center`}>
          <p className={`${size} text-gray-500 pr-1`}>
            {title ? title : "your-title-link"}
          </p>
          <Link
            to={href ? href : `#`}
            className={`${size} ${linkStyle} font-semibold`}
          >
            {textLink ? textLink : `your-text-Link`}
          </Link>
        </div>
      ) : (
        <Link
          to={href ? href : `#`}
          className={`${size} ${linkStyle} font-semibold`}
          {...props}
        >
          {textLink ? textLink : `your-text-Link`}
        </Link>
      )}
    </div>
  );
};

export default TextLink;
