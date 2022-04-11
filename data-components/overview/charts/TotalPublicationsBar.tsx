import { Chart } from "../../../components/Chart";

export const TotalPublicationsBarChart = () => {
  const categories = [
    "UoA",
    "MU",
    "UoC",
    "VUW",
    "UoW",
    "AUT",
    "LU",
    "CDHB",
    "CI",
    "ABI",
  ];

  const series = [
    {
      data: [87260, 33558, 31468, 27976, 15716, 11777, 7218, 6905, 2941, 1000],
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
