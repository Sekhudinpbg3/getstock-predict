import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { TextDinamis } from "../../atoms";

const ChartCashflow = ({ data, title, subTitle }) => {
  const year = moment().year();
  const quarter = [`Q1${+year}`, `Q2${+year}`, `Q3${+year}`, `Q4${+year}`];
  const dataOperating = data ? data["Operating"] : [1];
  const dataInvesting = data ? data["Investing"] : [1];
  const dataFinancing = data ? data["Financing"] : [1];
  const dataCashReserve = data ? data["Cash Reserve"] : [1];
  const dataNetCash = data ? data["Net Cash Change"] : [1];

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
        name: "Cash Reserve",
        data: dataCashReserve,
      },
      {
        type: "column",
        name: "Net Cash Change",
        data: dataNetCash,
      },
      {
        type: "spline",
        name: "Operating",
        data: dataOperating,
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
      },
      {
        type: "spline",
        name: "Investing",
        data: dataInvesting,
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[4],
          fillColor: "white",
        },
      },
      {
        type: "spline",
        name: "Financing",
        data: dataFinancing,
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[5],
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

export default ChartCashflow;
