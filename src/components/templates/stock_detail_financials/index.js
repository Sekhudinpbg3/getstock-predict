import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Gap, TextDinamis } from "../../atoms";
import { DisclosureCustom } from "../../organisms";
import BalanceChart from "../balance";
import ChartCashflow from "../cashflow";
import ChartEarnings from "../earnings";

const StockDetailFinancials = () => {
  const { detailBalanceSheet, detailEarnings, detailCashFlow } = useSelector(
    (state) => state.detailReducer
  );
  const param = useParams();
  const code = param.code;

  const dataDisclosure = {
    "Income Statement": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis title={`Income Statement ${code}`} semibold wfull={true} />
        <Gap className={"h-5"} />
        <ChartEarnings
          data={detailEarnings}
          title={`Income Statement ${code}`}
          subTitle={`Source: yahoo-finance`}
        />
      </div>
    ),
    "Cash Flow": (
      <div className={`px-4 py-2 bg-white rounded shadow`}>
        <TextDinamis title={`Cash Flow ${code}`} semibold wfull={true} />
        <Gap className={"h-5"} />
        <ChartCashflow
          data={detailCashFlow}
          title={`Cash Flow ${code}`}
          subTitle={`Source: yahoo-finance`}
        />
      </div>
    ),
  };

  return (
    <div>
      <TextDinamis title={`Balance Sheet ${code}`} semibold wfull={true} />
      <Gap className={"h-5"} />
      <BalanceChart
        data={detailBalanceSheet}
        title={`Balance Sheet ${code}`}
        subTitle={`Source: yahoo-finance`}
      />
      <Gap />
      <DisclosureCustom listData={dataDisclosure} />
    </div>
  );
};

export default StockDetailFinancials;
