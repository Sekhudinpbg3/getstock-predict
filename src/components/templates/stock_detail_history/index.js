import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Gap, TextDinamis } from "../../atoms";
import ChartStock from "../chart";

const StockDetailHistory = () => {
  const { detailHistory } = useSelector((state) => state.detailReducer);
  const param = useParams();
  const code = param.code;

  return (
    <div>
    <TextDinamis title={`History Close Price Saham ${code}`} semibold wfull={true} />
    <Gap className={'h-5'} />
      <ChartStock
        data={detailHistory}
        title={code}
        subTitle={`Source: yahoo-finance`}
      />
    </div>
  );
};

export default StockDetailHistory;
