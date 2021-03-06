import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading-animation";

const Icon = ({ src, href, alt, className, hover, wdLoader, spaceXLoader }) => {
  const customClassName = className ? className : "w-10 h-10 bg-white";
  const isHovers = hover ? hover : "lg:hover:p-0.5";

  return (
    <div className={`${customClassName}`}>
      <Link to={href ? href : `#`} >
        {src ? (
          src !== "" ? (
            <div className={`${isHovers}`}>
              <img src={src} alt={alt ? alt : `your-icon`} />
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
      </Link>
    </div>
  );
};

export default Icon;
