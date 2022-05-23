import React from "react";
import { Chart } from "../../../components/Chart";
import { useOverviewContext } from "../../../contexts/OverviewProvider";

interface ChartDataProps {
  category: string;
  source: string;
  count: number;
}

export const PublicationsByCategoryPie = () => {
  //Get data from overview context
  let data: any = useOverviewContext();

  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.subject
  ) as ChartDataProps[];

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
      showLegend={true}
      toolTipValueSuffix=""
    />
  );
};
