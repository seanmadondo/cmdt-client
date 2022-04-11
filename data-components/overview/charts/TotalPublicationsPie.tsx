import React from "react";
import { Chart } from "../../../components/Chart";

export const TotalPublicationsPieChart = () => {
  const series = [
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
  ];

  return (
    <Chart
      chartType={"pie"}
      series={series}
      includeDataLabels
      showLegend={false}
    />
  );
};
