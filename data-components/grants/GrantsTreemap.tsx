/** @jsxImportSource @emotion/react */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsTreeChart from "highcharts/modules/treemap";

if (typeof Highcharts === "object") {
  HighchartsTreeChart(Highcharts);
}

const options = {
  series: [
    {
      type: "treemap",
      layoutAlgorithm: "squarified",
      allowDrillToNode: true,
      animation: false,
      dataLabels: {
        enabled: true,
      },
      levelIsConstant: false,
      levels: [
        {
          level: 1,
          dataLabels: {
            enabled: true,
          },
          borderWidth: 3,
        },
      ],
      data: [
        {
          name: "UoA",
          value: 5,
          color: "#EC9800",
        },
        {
          name: "UoO",
          value: 3,
        },
        {
          name: "ABI",
          value: 4,
        },
        {
          name: "AUT",
          value: 2,
          color: "#9EDE00",
        },
      ],
    },
  ],
  title: {
    text: "Top Funding Agencies (In Development)",
  },
  credits: false,
};

export const GrantsTreemap = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
