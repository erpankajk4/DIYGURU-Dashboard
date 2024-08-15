import React from "react";

export default function Cardlast({
    heading,
    Te,
    Tc,
    attend,
    attempt,
    unattempt,
    missed,
    passed,
    failed,
  }: any) {
    return (
      <div className="flex items-stretch w-full sm:w-[48%] flex-col p-3 rounded-xl border-solid shadow-[0_0_18px_1px_rgba(128,0,128,0.2)] border-zinc-400 my-3">
        <h3 className="text-2xl font-medium">{heading}</h3>
  
        <div className="flex flex-row items-center flex-wrap justify-between my-4  min-h-24 ">
          {Te && <h4 className="w-full text-lg font-medium">Total Exam: {Te}</h4>}
          {Tc && (
            <h4 className="w-full text-lg font-medium">Total Classes: {Tc}</h4>
          )}
          {attend && (
            <h4 className="w-full text-lg font-medium text-green-500">
              Attended: {attend}
            </h4>
          )}
          {attempt && (
            <h4 className="text-lg font-medium">Attempted: {attempt}</h4>
          )}
          {unattempt && (
            <h4 className=" text-lg font-medium text-zinc-500">
              Unattempted: {unattempt}
            </h4>
          )}
          {passed && (
            <h4 className="text-lg font-medium text-green-500">
              Passed: {passed}
            </h4>
          )}
          {missed && (
            <h4 className="w-full text-lg font-medium text-red-500">
              Missed: {missed}
            </h4>
          )}
          {failed && (
            <h4 className=" text-lg font-medium text-red-500">
              Failed: {failed}
            </h4>
          )}
        </div>
        <button className="bg-foreground/100 hover:bg-foreground/70 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    );
  }