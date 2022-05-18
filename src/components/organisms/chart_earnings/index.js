import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { TextDinamis } from "../../atoms";

const ChartEarnings = ({ data, title, subTitle }) => {
  const year = moment().year();
  const quarter = [`Q1${+year}`, `Q2${+year}`, `Q3${+year}`, `Q4${+year}`];
  const dataRevenue = data ? data["Revenue"] : [1];
  const dataEarnings = data ? data["Earnings"] : [1];

  const getNPM = (earning, revenue) => {
    let dataArray = [];
    for (let i = 0; i < earning.length; i++) {
      let val = (earning[i] / revenue[i]) * 100;
      dataArray.push(Math.round(val));
    }
    return dataArray;
  };
  const dataNPM = getNPM(dataEarnings, dataRevenue);

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
        name: "Revenue",
        data: dataRevenue,
      },
      {
        type: "column",
        name: "Earnings",
        data: dataEarnings,
      },
      {
        type: "spline",
        name: "NPM (%)",
        data: dataNPM,
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

export default ChartEarnings;
