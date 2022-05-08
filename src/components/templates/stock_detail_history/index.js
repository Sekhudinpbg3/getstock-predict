import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StockDetailHistory = () => {
  const { detailHistory } = useSelector((state) => state.detailReducer);
  const param = useParams();
  const code = param.code;
  console.log("History: ", detailHistory);

  return <div>StockDetailHistory {code}</div>;
};

export default StockDetailHistory;
