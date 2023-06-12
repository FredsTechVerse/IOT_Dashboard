import { useEffect, useState } from "react";
import {
  SoilVsAirTempt,
  Gauge,
  PhGauge,
  PageTitle,
} from "./components";
import { TankStatus, VoltageAndCurrentReadings } from "./containers";
import "./App.css";
const App = () => {
  const [value, setValue] = useState(0);

  const [theme, setTheme] = useState(localStorage.theme);
  const [darkSide, setDarkSide] = useState(theme === "light" ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem(`theme`, theme);
  }, [theme, colorTheme]);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue >= 14) {
          return 0;
        } else {
          return prevValue + 1;
        }
      });
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col w-full min-h-screen dark:bg-navy bg-slate-100 `}
    >
      <PageTitle
        text="IOT Dashboard"
        darkToggle={darkSide}
        setDarkToggle={toggleDarkMode}
      />
      <div className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 min-h-screen p-4">
        <Gauge title="humidity" value={value * 4} />
        <Gauge title="moisture" value={value * 2} />
        <PhGauge title="Ph level" value={value} />
        <SoilVsAirTempt darkSide={darkSide} />
        <div className="col-span-1 phone:row-start-4 tablet:col-start-2 tablet:col-span-1 tablet:row-start-2 laptop:row-start-2 laptop:col-start-3 laptop:col-span-1 rounded-lg flex-col-centered gap-2">
          <div className="w-full tablet:hidden laptop:block">
            <VoltageAndCurrentReadings value={value} />
          </div>
          <TankStatus value={value} />
        </div>

        <div className="w-full phone:hidden tablet:block tablet:col-span-2 laptop:hidden">
          <VoltageAndCurrentReadings value={value} />
        </div>
      </div>
    </div>
  );
};

export default App;
