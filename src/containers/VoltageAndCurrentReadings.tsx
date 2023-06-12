import { Readings } from "../components";

interface VoltageAndCurrentReadingsProps  {
  value:number
}
const VoltageAndCurrentReadings:React.FC<VoltageAndCurrentReadingsProps> = ({ value }) => {
  return (
    <div className=" w-full flex dark:bg-slate-500 dark:bg-opacity-20 bg-card p-1 gap-3 rounded-lg text-white ">
      <Readings value="voltage" reading={value * 30} unit="V" />
      <Readings value="current" reading={value / 10} unit="mA" />
    </div>
  );
};

export default VoltageAndCurrentReadings;
