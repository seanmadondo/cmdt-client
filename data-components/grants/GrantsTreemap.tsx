/** @jsxImportSource @emotion/react */
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsTreeChart from "highcharts/modules/treemap";

if (typeof Highcharts === "object") {
  HighchartsTreeChart(Highcharts);
}

interface GrantsTreeMapProps {
  data: any;
}

interface ChartDataProps {
  source: string;
  target: string;
  count: number;
  percentage: number;
}

export const GrantsTreemap = ({ data }: GrantsTreeMapProps) => {
  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  function createTreeMapData() {
    let seriesData: any[] = [];
    let top10DataArray = chartData.slice(0, 10);
    top10DataArray.forEach(
      ({ source, target, count, percentage }: ChartDataProps) => {
        seriesData.push({ name: target, value: count });
      }
    );
    return seriesData;
  }

  console.log(createTreeMapData());

  const options = {
    colorAxis: {
      minColor: "#FFFFFF",
      maxColor: "",
    },
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
        data: createTreeMapData(),
      },
    ],
    title: {
      text: "Top Funding Agencies (In Development)",
    },
    credits: false,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
