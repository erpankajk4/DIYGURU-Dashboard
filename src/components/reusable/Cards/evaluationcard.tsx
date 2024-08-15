import React from "react";

export default function Cardevaluate({ icon, name, number, numbg }: any) {
    return (
      <div className="flex items-center flex-col p-3 rounded-xl w-[30%] shadow-[0px_4px_5px_1px_rgba(128,0,128,0.2)] my-3 text-center bg-blue-100">
        {icon}
        <h3 className="text-[12px] leading-4 font-normal">{name}</h3>
  
        <div className={`text-white p-1 w-8 mt-4 ${numbg}`}>{number}</div>
      </div>
    );
  }