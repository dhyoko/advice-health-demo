import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { COLORS } from "../../utils/consts";

const PieChart = (props) => {
  const { data, total } = props;

  const CenteredMetric = ({ centerX, centerY }) => {
    if (!total) {
      return;
    }

    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "52px",
          fontWeight: 600,
        }}
      >
        {total}
      </text>
    );
  };

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={20}
      colors={{ scheme: "blues" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={COLORS.DARK_GRAY}
      arcLinkLabelsThickness={2}
      arcLinkLabelsDiagonalLength={13}
      arcLinkLabelsStraightLength={10}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      layers={["arcs", "arcLabels", "arcLinkLabels", "legends", CenteredMetric]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: COLORS.LIGHT_GRAY,
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: COLORS.LIGHT_GRAY,
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: false,
          translateX: -55,
          translateY: 50,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: COLORS.GRAY,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: COLORS.SOFT_BLACK,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
