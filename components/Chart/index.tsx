import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartProps {
  chartType: string;
  chartTitle?: string;
  chartSubtitle?: string;
  xAxisTitle?: string;
  xAxisCategories?: string[];
  yAxisTitle?: string;
  series: Object;
  includeDataLabels?: true;
  showLegend?: boolean;
  toolTipValueSuffix?: string; // thousands, millions etc
  chartHeight?: string; // 60%, 250px etc
}

export const Chart = ({
  chartType,
  chartTitle,
  chartSubtitle,
  xAxisCategories,
  xAxisTitle,
  yAxisTitle,
  includeDataLabels,
  series,
  toolTipValueSuffix,
  showLegend,
  chartHeight,
}: ChartProps) => {
  const chartOptions = {
    chart: {
      type: chartType,
      height: chartHeight,
    },
    title: {
      text: chartTitle,
    },
    subtitle: {
      text: chartSubtitle,
    },
    tooltip: {
      valueSuffix: " " + toolTipValueSuffix,
    },
    scrollbars: {
      enabled: true,
    },
    xAxis: {
      categories: xAxisCategories,
      title: {
        text: xAxisTitle,
      },
      scalable: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: yAxisTitle,
      },
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor: "pointer",
        showInLegend: showLegend,
        dataLabels: {
          enabled: includeDataLabels,
        },
      },
    },
    series: series,
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
