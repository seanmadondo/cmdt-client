import { Chart } from "../../../components/Chart";
import { useNetworkContext } from "../../../contexts/NetworkProvider";

interface ChartDataProps {
  source: string;
  target: string;
  count: number;
}

export const NetworkBarChart = () => {
  //Get data from fingerprint context
  let data: any = useNetworkContext();

  const categories: string[] = [];
  const seriesData: any[] = [];
  const yaxisOptions: string[] = [];

  //process received data
  const chartData: ChartDataProps[] = Object.values(
    data.networkData
  )[0] as ChartDataProps[];

  //populate barChart categories & series data
  chartData.map(({ source, target, count }) => {
    !categories.includes(target) && categories.push(target);

    if (!yaxisOptions.includes(target)) {
      yaxisOptions.push(target);
      seriesData.push({
        name: target,
        data: [count],
      });
    } else {
      seriesData.forEach(({ name, data }) => {
        if (name === target) {
          data.push(count);
        }
      });
    }
  });

  const series = seriesData;

  return (
    <Chart
      chartType={"bar"}
      toolTipValueSuffix=""
      series={series}
      xAxisTitle={"Target"}
      xAxisCategories={categories}
      yAxisTitle={"Count"}
      showLegend={false}
      chartHeight={"650px"}
    />
  );
};
