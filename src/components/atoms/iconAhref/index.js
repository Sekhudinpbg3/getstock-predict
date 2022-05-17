import React from "react";
import { NoImage } from "../../../assets";
import Loading from "../loading-animation";

const IconAhref = ({
  src,
  href,
  alt,
  className,
  hover,
  wdLoader,
  spaceXLoader,
  onClick,
}) => {
  const customClassName = className ? className : "w-10 h-10 bg-white";
  const isHovers = hover ? hover : "lg:hover:p-0.5";

  return (
    <div className={`${customClassName}`}>
      <a
        href={href ? href : onClick ? null : `#`}
        target={onClick ? "" : `_blank`}
        onClick={onClick ? onClick : null}
      >
        {src ? (
          src !== "" ? (
            <div className={`${isHovers}`}>
              <img
                src={src}
                alt={alt ? alt : `your-icon`}
                onError={(event) => {
                  event.target.src = NoImage;
                  event.onerror = null;
                }}
              />
            </div>
          ) : (
            <div
              className={`flex justify-center items-center ${customClassName} bg-red-100`}
            >
              <Loading
                width={wdLoader ? wdLoader : null}
                spaceX={spaceXLoader ? spaceXLoader : null}
              />
            </div>
          )
        ) : (
          <div
            className={`flex justify-center items-center ${customClassName} bg-gray-100`}
          >
            <Loading
              width={wdLoader ? wdLoader : null}
              spaceX={spaceXLoader ? spaceXLoader : null}
            />
          </div>
        )}
      </a>
    </div>
  );
};

export default IconAhref;
