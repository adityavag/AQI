import React from "react";
import { CiWarning } from "react-icons/ci";
const Status = () => {
    return (
        <div className="p-8 bg-[#fff7ed] border-2 rounded-lg border-[#fed6aa] text-[#c1410b] space-y-4">
            <div className="flex items-center justify-between text-lg font-mediumbold">Live AQI Status<span><CiWarning /></span></div>
            <div className="text-5xl text-center font-bold">125</div>
            <div className="text-xl text-center">Unhealthy</div>
            <div className="text-center">Air quality is poor. Consider staying indoors.</div>
        </div>
    )
}
export default Status;