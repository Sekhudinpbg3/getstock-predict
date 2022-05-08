import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StockDetailFinancials = () => {
  const { detailBalanceSheet, detailEarnings, detailCashFlow } = useSelector(
    (state) => state.detailReducer
  );
  const param = useParams();
  const code = param.code;

  console.log("Balance: ", detailBalanceSheet);
  console.log("CashFlow: ", detailCashFlow);
  console.log("Earnings: ", detailEarnings);

  return <div>StockDetailFinancials {code}</div>;
};

export default StockDetailFinancials;
