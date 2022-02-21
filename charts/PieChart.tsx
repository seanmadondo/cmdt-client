import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "K",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Total publications",
      colorByPoint: true,
      data: [
        {
          name: "UoA",
          y: 61.41,
          sliced: true,
          selected: true,
        },
        {
          name: "MU",
          y: 11.84,
        },
        {
          name: "UoC",
          y: 10.85,
        },
        {
          name: "VUW",
          y: 4.67,
        },
        {
          name: "UoW",
          y: 4.18,
        },
        {
          name: "Other",
          y: 7.05,
        },
      ],
    },
  ],
};

export const PieChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
