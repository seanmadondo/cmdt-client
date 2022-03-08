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
      "Engineering Biomedical",
      "Electrical",
      "Physiology",
      "Biophysics",
      "Mathematical",
      "Cardiac",
      "NeuroSciences",
      "Computer Science",
      "Clinical",
      "Biochemical",
    ],
    title: {
      text: "Categories",
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
      data: [872, 335, 314, 279, 157, 117, 72, 69, 29, 10],
    },
  ],
};

export const BarGraph = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
