import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import { FC } from "react";
import LiquidFillGauge from "react-liquid-gauge";

interface TankLevelProps {
  level:number;
  label:string;
}
const TankLevel:FC<TankLevelProps> = ({ level, label }) => {
  const startColor = "#e72323"; // cornflowerblue
  const endColor = "#46d317"; // crimson
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(level / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).darker(0.5).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).brighter(0.5).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  return (
    <div className="flex-col-centered">
      <LiquidFillGauge
        width={130}
        height={130}
        value={level}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={({ value, width, height, textSize, percent }) => {
          value = Math.round(value);
          const radius = Math.min(height / 2, width / 2);
          const textPixels = (textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels,
          };
          const percentStyle = {
            fontSize: textPixels * 0.6,
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>{percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor,
        }}
        waveStyle={{
          fill: fillColor,
        }}
        textStyle={{
          fill: color("#444").toString(),
          fontFamily: "Arial",
        }}
        waveTextStyle={{
          fill: color("#fff").toString(),
          fontFamily: "Arial",
        }}
      />

      <p className="text-xs font-bold p-2 capitalize text-slate-200">{label}</p>
    </div>
  );
};

export default TankLevel;
