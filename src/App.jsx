import React from "react";
import Status from "./components/Status";
import Card from "./components/Card";
import { CiWarning } from "react-icons/ci";
import { MdOutlineWaves } from "react-icons/md";
import { FiThermometer } from "react-icons/fi";
import { LuDroplets } from "react-icons/lu";
const App = () => {
  return (
    <div className="bg-[#f9fafb] min-h-screen p-16">
      <div className="text-4xl font-semibold">Air Quality Dashboard</div>
      <div className="grid grid-cols-4 space-x-8 mt-8">
        <Status />
        <Card
          title={<span>CO<sub>2</sub> Level</span>}
          icon={<MdOutlineWaves className="bg-[#e4e4e7] text-black rounded-full p-2 w-8 h-8" />}
          value="450"
          unit="ppm"
        />
        <Card
          title="Temperature"
          icon={<FiThermometer className="bg-[#e4e4e7] text-black rounded-full p-2 w-8 h-8" />}
          value="24.5"
          unit={<span><sup>o</sup>C</span>}
        />
        <Card
          title="Humidity"
          icon={<LuDroplets className="bg-[#e4e4e7] text-black rounded-full p-2 w-8 h-8" />}
          value="65"
          unit="%"
        />
      </div>
    </div>
  )
}

export default App;