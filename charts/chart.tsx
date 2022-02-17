import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    style: {
      fontFamily: "Arial",
    },
  },
  title: {
    text: "My test chart",
  },

  series: [
    {
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        295.6, 454.4,
      ],
      dataLabels: { enabled: true },
    },
  ],
};

export const TestChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
