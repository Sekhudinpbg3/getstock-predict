import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "../../atoms";

const CardIcon = ({ src, title, className, href, navigate }) => {
  const history = useNavigate();
  return (
    <div className={`p-2 shadow-lg shadow-gray-200 rounded`}>
      <Icon
        src={src}
        className={className ? className : `w-full bg-white`}
        href={href ? href : `#`}
      />
      <Button
        primary={true}
        title={title ? title : `your-btn-navigate`}
        onClick={() => {
          history(navigate ? navigate : `#`);
        }}
      />
    </div>
  );
};

export default CardIcon;
