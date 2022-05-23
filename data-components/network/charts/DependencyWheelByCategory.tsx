import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HC_sankey from "highcharts/modules/sankey";
import HC_depwheel from "highcharts/modules/dependency-wheel";
import { useNetworkContext } from "../../../contexts/NetworkProvider";

if (typeof Highcharts === "object") {
  HC_sankey(Highcharts);
  HC_depwheel(Highcharts);
}

interface DependancyWheelChartByCategoryProps {
  data: any;
}

interface ChartDataProps {
  source: string;
  target: string;
  count: number;
  percentage: number;
}

export const DependencyWheelChartByCategory = () => {
  //Get data from overview context
  let data: any = useNetworkContext();
  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.categoryData
  )[0] as ChartDataProps[];

  //populate chart series with data
  function generateSeriesData() {
    let seriesData: any[] = [];
    let currentTargetAbbr: string = "";
    chartData.map(({ source, target, count }: ChartDataProps) => {
      seriesData.push([source, target, count]);
    });
    return seriesData;
  }

  const options = {
    title: {
      text: "",
    },

    accessibility: {
      point: {
        valueDescriptionFormat:
          "{index}. From {point.from} to {point.to}: {point.weight}.",
      },
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        keys: ["from", "to", "weight"],
        data: generateSeriesData(),
        type: "dependencywheel",
        name: "Dependency wheel series",
        dataLabels: {
          color: "#333",
          textPath: {
            enabled: true,
            attributes: {
              dy: 5,
            },
          },
          distance: 10,
        },
        size: "95%",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
