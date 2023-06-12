import { TankLevel } from "../components";
import { RainfallAndPumpStatus } from "../containers";

interface TankStatusProps  {
  value:number
}
const TankStatus:React.FC<TankStatusProps> = ({ value }) => {
  return (
    <div className="w-full col-span-1 phone:row-start-5 tablet:col-start-2 tablet:row-start-2  flex-col-centered gap-2 ">
      <RainfallAndPumpStatus />
      <h1 className="font-bold text-xl text-orange-600">WATER TANKS</h1>
      <div className="flex flex-row-centered gap-3 ">
        <TankLevel level={value * 6.6667} label="Tank A" />
        <TankLevel level={100 - value * 6} label="tank B" />
      </div>
    </div>
  );
};

export default TankStatus;
