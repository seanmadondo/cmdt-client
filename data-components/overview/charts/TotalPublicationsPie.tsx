import React from "react";
import { Chart } from "../../../components/Chart";

interface TotalPublicationsPieChartProps {
  data: any;
}

interface ChartDataProps {
  source: string;
  count: number;
}

export const TotalPublicationsPieChart = ({
  data,
}: TotalPublicationsPieChartProps) => {
  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  //populate chart series with data
  function generateSeriesData() {
    const data: any[] = [];
    chartData.map(({ source, count }) => {
      data.push({ name: source, y: count });
    });
    return data;
  }

  const series = [
    {
      name: "Total publications",
      colorByPoint: true,
      data: generateSeriesData(),
    },
  ];

  return (
    <Chart
      chartType={"pie"}
      series={series}
      includeDataLabels
      showLegend={true}
      toolTipValueSuffix="Publications"
    />
  );
};
