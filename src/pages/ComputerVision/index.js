// import axios from "axios";
import React from "react";
import {Gap, HeaderPage, LiveDetection } from "../../components";

const ComputerVision = () => {

  return (
    <div>
      <HeaderPage title={`Computer Vision`} />
      <LiveDetection/>
      <Gap className={`h-16 w-full`} />
    </div>
  );
};

export default ComputerVision;
