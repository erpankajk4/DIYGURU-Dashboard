import React from "react";

export default  function CardPerform({ bg, grade, text }: any) {
    return (
      <div className="flex  flex-col p-2 rounded-xl w-[30%] shadow-[0px_4px_5px_1px_rgba(128,0,128,0.2)] my-3 text-center">
        <div className="flex justify-center items-end h-14 mb-2">
          <div className={`w-4 mr-2 ${bg}  `} style={{ height: `${grade}%`}}></div> <h4 className="text-lg font-normal">{grade}%</h4>
        </div>
        <p className="text-sm text-left text-zinc-500 ">{text}</p>
      </div>
    );
  }