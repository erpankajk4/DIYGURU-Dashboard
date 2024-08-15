import React from "react";

export default function Carddetails({ icon, text, value, bgColor }: any) {
    return (
      <div
        className={`flex items-center mx-1 rounded-2xl ${bgColor} px-2 py-4 shadow-xl flex-col text-center content-center w-34`}
      >
        {icon}
        <h3 className="font-normal text-sm">{text}</h3>
        <p className="text-zinc-900 text-xs">{value}</p>
      </div>
    );
  }