import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { TextDinamis } from "../../atoms";

const BalanceChart = ({ data, title, subTitle }) => {
  const year = moment().year();
  const quarter = [`Q1${+year}`, `Q2${+year}`, `Q3${+year}`, `Q4${+year}`];
  const dataAset = data ? data["Aset"] : [1];
  const dataEquity = data ? data["Equity"] : [1];
  const dataLiabilitas = data ? data["Liabilitas"] : [1];

  const getDER = (liability, equity) => {
    let dataArray = [];
    for (let i = 0; i < liability.length; i++) {
      let val = (liability[i] / equity[i]) * 100;
      dataArray.push(Math.round(val));
    }
    return dataArray;
  };
  const dataDER = getDER(dataLiabilitas, dataEquity);

  const options = {
    title: {
      text: title ? title : "your-title",
      style: {
        color: "#22C55E",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: subTitle ? subTitle : "source: your-source",
      style: {
        color: "#9CA3AF",
        fontWeight: "bold",
      },
    },
    xAxis: {
      categories: quarter,
    },
    series: [
      {
        type: "column",
        name: "Equity",
        data: dataEquity,
      },
      {
        type: "column",
        name: "Liabilitas",
        data: dataLiabilitas,
      },
      {
        type: "column",
        name: "Aset",
        data: dataAset,
      },
      {
        type: "spline",
        name: "DER (%)",
        data: dataDER,
        tooltip: {
          valueSuffix: "%",
        },
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
      },
    ],
  };
  return (
    <div
      className={
        data ? `` : `h-52 w-full flex justify-center items-center bg-gray-100`
      }
    >
      {data ? (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </div>
      ) : (
        <TextDinamis />
      )}
    </div>
  );
};

export default BalanceChart;
