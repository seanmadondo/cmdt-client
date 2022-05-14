import { Chart } from "../../components/Chart";
import { useFingerprintContext } from "../../contexts/FingerprintProvider";

interface ChartDataProps {
  source: string;
  target: string;
  category: string;
  count: number;
}

export const ResearchAreasBarChart = () => {
  //Get data from fingerprint context
  let data: any = useFingerprintContext();

  const categories: string[] = [];
  const seriesData: any[] = [];

  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  //populate barChart categories & series data
  chartData.map(({ source, target, category, count }) => {
    categories.push(category);
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
      chartHeight="115%"
    />
  );
};
