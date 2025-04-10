import React from "react";
import { CiWarning } from "react-icons/ci";
const Card = (props) => {
    return (
        <div className="p-8 bg-[#ffffff] border-2 rounded-lg border-[#e4e4e7] space-y-4">
            <div className="flex items-center justify-between text-sm text-[#ababaf] font-mediumbold">{props.title}<span>{props.icon}</span></div>
            <div><span className="text-4xl font-bold">{props.value}</span><span className="text-[#ababaf]"> {props.unit}</span></div>
        </div>
    )
}
export default Card;