import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StockDetailInfo = () => {
  const { detailInfo } = useSelector((state) => state.detailReducer);
  const param = useParams();
  const code = param.code;

  console.log("detail Info: ", detailInfo);

  return <div>StockDetailInfo {code} </div>;
};

export default StockDetailInfo;
