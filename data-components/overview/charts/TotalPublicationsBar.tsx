import { Chart } from "../../../components/Chart";

interface TotalPublicationsBarProps {
  data: any;
  isLoading?: boolean;
}

interface ChartDataProps {
  source: string;
  count: number;
}

export const TotalPublicationsBarChart = ({
  data,
}: TotalPublicationsBarProps) => {
  const categories: string[] = [];
  const seriesData: any[] = [];
  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.data
  )[0] as ChartDataProps[];

  //populate barChart categories & series data
  chartData.map(({ source, count }) => {
    categories.push(source);
    seriesData.push(count);
  });

  const series = [
    {
      // dataSorting: {
      //   enabled: true,
      // },
      data: seriesData,
    },
  ];

  return (
    <Chart
      chartType={"bar"}
      toolTipValueSuffix="Thousand"
      series={series}
      includeDataLabels
      xAxisTitle={"Organisations"}
      xAxisCategories={categories}
      yAxisTitle={"Count"}
      showLegend={false}
    />
  );
};
