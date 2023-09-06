import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const defaultAxisSetting = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legendPosition: "middle",
};

const BarChart = (props) => {
  const {
    data,
    keys,
    axisLeftLabel,
    axisBottomLabel,
    horizontal = false,
    customTooltip,
  } = props;

  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy="id"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      layout={horizontal ? "horizontal" : "vertical"}
      margin={{ top: 20, right: 50, bottom: 80, left: 160 }}
      axisBottom={{
        legend: axisBottomLabel,
        legendOffset: 32,
        ...defaultAxisSetting,
      }}
      axisLeft={{
        legend: axisLeftLabel,
        legendOffset: -40,
        ...defaultAxisSetting,
      }}
      labelTextColor={{ theme: "background" }}
      padding={0.3}
      groupMode="stacked"
      tooltip={customTooltip}
      colors={{ scheme: "category10" }}
    />
  );
};

export default BarChart;
