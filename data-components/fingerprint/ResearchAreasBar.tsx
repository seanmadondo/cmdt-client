import { Chart } from "../../components/Chart";

export const ResearchAreasBarChart = () => {
  const categories = [
    "Engineering Biomedical",
    "Electrical",
    "Physiology",
    "Biophysics",
    "Mathematical",
    "Cardiac",
    "NeuroSciences",
    "Computer Science",
    "Clinical",
    "Biochemical",
  ];

  const series = [
    {
      data: [872, 335, 314, 279, 157, 117, 72, 69, 29, 10],
    },
  ];

  return (
    <Chart
      chartType={"bar"}
      toolTipValueSuffix="Thousand"
      series={series}
      includeDataLabels
      xAxisTitle={"Categories"}
      xAxisCategories={categories}
      yAxisTitle={"Count"}
      showLegend={true}
    />
  );
};
