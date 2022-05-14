import React from "react";
import { Chart } from "../../../components/Chart";

interface PublicationsByCategoryPieProps {
  data: any;
}

interface ChartDataProps {
  category: string;
  source: string;
  count: number;
}

export const PublicationsByCategoryPie = ({
  data,
}: PublicationsByCategoryPieProps) => {
  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  //populate chart series with data
  function generateSeriesData() {
    const data: any[] = [];
    chartData.map(({ category, source, count }) => {
      data.push({ name: source, y: count });
    });
    return data;
  }

  const series = [
    {
      name: "Total Publication By Category",
      colorByPoint: true,
      data: generateSeriesData(),
    },
  ];

  return (
    <Chart
      chartType={"pie"}
      series={series}
      includeDataLabels
      showLegend={false}
      toolTipValueSuffix="Thousand"
    />
  );
};
