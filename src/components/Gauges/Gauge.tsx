import { FC } from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface GaugeProps {
  title:string;
  value:number;
}
export const Gauge:FC<GaugeProps> = ({ title, value }) => {
  return (
    <div className="rounded-lg col-span-1 h-56 flex-col-centered dark:bg-slate-500 bg-card dark:bg-opacity-20  ">
      <p className="font-bold text-slate-300 uppercase  mr-auto ml-2">
        {title}
      </p>
      <div className="h-48 p-2 ">
        <ReactSpeedometer
          minValue={0}
          maxValue={100}
          width={270}
          ringWidth={40}
          needleHeightRatio={0.75}
          value={value}
          currentValueText={`Percentage : ${value} %`}
          customSegmentLabels={[
            {
              text: "V. Bad",
              color: "#555",
              fontSize: "12px",
            },
            {
              text: "Bad",
              color: "#555",
            },
            {
              text: "Ok",
              color: "#555",
              fontSize: "19px",
            },
            {
              text: "Good",
              color: "#555",
            },
            {
              text: "V. Good",
              color: "#555",
              fontSize: "12px",
            },
          ]}
          needleTransitionDuration={3333}
          needleColor={"#57575c"}
          textColor={"#d8dee9"}
        />
      </div>
    </div>
  );
};

export default Gauge;
