import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "bar",
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
  },
  xAxis: {
    categories: ["UoA", "MU", "UoC", "VUW", "UoW"],
    title: {
      text: "Orgnisations",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Count",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  tooltip: {
    valueSuffix: " Thousand",
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "top",
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "UoA",
      data: [107],
    },
    {
      name: "MU",
      data: [133],
    },
    {
      name: "UoC",
      data: [814],
    },
    {
      name: "Year 2016",
      data: [1216],
    },
  ],
};

export const BarGraph = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
