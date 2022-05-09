import { Chart } from "../../../components/Chart";

interface NetworkBarChartProps {
  data: any;
}

interface ChartDataProps {
  source: string;
  target: string;
  count: number;
}

export const NetworkBarChart = ({ data }: NetworkBarChartProps) => {
  const categories: string[] = [];
  const seriesData: any[] = [];

  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  //populate barChart categories & series data
  chartData.map(({ source, target, count }) => {
    categories.push(target);
    seriesData.push(count);
  });

  const series = [
    {
      data: seriesData,
    },
  ];

  return (
    <Chart
      chartType={"bar"}
      toolTipValueSuffix=""
      series={series}
      includeDataLabels
      xAxisTitle={"Categories"}
      xAxisCategories={categories}
      yAxisTitle={"Count"}
      showLegend={false}
      chartHeight={"650px"}
    />
  );
};
