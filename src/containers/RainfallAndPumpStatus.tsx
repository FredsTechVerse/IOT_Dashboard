import { Badge } from "../components";
const RainfallAndPumpStatus = () => {
  return (
    <div className="w-full flex-row-centered gap-4 px-2  rounded-lg text-black dark:text-slate-100">
      <Badge quantity="Rainfall" value="Yes" />
      <Badge quantity="Pump" value="Off" />
    </div>
  );
};

export default RainfallAndPumpStatus;
