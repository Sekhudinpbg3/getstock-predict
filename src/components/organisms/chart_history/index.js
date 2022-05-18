import React from "react";
import {TextDinamis } from "../../atoms";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";

const ChartHistory = ({ data, title, subTitle }) => {
  // valid period 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
  const setData = (theData) => {
    let setArray = [];
    for (let dt in theData)
      setArray.push([moment(parseInt(dt)).local().format("LL"), theData[dt]]);
    return setArray;
  };

  const dataChart = data? setData(data):[1]
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
    navigator: {
      series: {
        color: "#22C55E",
        lineWidth: 1,
      },
    },
    rangeSelector: {
      verticalAlign: "bottom",
      selected: 3,
      x: 0,
      y: 0,
    },
    series: [
      {
        name: title ? title : "title",
        data: dataChart,
        gapSize: 1,
        tooltip: {
          valueDecimals: 2,
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

export default ChartHistory;
