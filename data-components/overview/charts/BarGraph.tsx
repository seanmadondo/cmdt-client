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
    categories: [
      "UoA",
      "MU",
      "UoC",
      "VUW",
      "UoW",
      "AUT",
      "LU",
      "CDHB",
      "CI",
      "ABI",
    ],
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
      data: [87260, 33558, 31468, 27976, 15716, 11777, 7218, 6905, 2941, 1000],
    },
  ],
};

export const BarGraph = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
