import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  olorAxis: {
    minColor: "#FFFFFF",
    maxColor: "#242424",
  },
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      data: [
        {
          name: "A",
          value: 6,
          colorValue: 1,
        },
        {
          name: "B",
          value: 6,
          colorValue: 2,
        },
        {
          name: "C",
          value: 4,
          colorValue: 3,
        },
        {
          name: "D",
          value: 3,
          colorValue: 4,
        },
        {
          name: "E",
          value: 2,
          colorValue: 5,
        },
        {
          name: "F",
          value: 2,
          colorValue: 6,
        },
        {
          name: "G",
          value: 1,
          colorValue: 7,
        },
      ],
    },
  ],
  title: {
    text: "Highcharts Treemap",
  },
};

export const TreeMap = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
