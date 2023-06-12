import { FC } from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface PhGaugeProps {
  title:string;
  value:number;
}
export const PhGauge:FC<PhGaugeProps> = ({ title, value }) => {
  return (
    <div className="rounded-lg col-span-1 h-56 flex-col-centered dark:bg-slate-500 bg-card dark:bg-opacity-20  ">
      <p className="font-bold text-slate-300 uppercase  mr-auto ml-2">
        {title}
      </p>
      <div className="h-48 p-2 ">
        <ReactSpeedometer
          width={270}
          ringWidth={40}
          needleHeightRatio={0.75}
          value={value}
          minValue={0}
          maxValue={14}
          maxSegmentLabels={14}
          segments={14}
          needleColor={"#57575c"}
          textColor={"#d8dee9"}
          currentValueText={`PH Value : ${value}`}
        />
      </div>
    </div>
  );
};

export default PhGauge;
