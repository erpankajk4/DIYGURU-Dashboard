import React, { useEffect, useState } from "react";
import { FaRegCheckCircle, FaStar } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

export default function StudentEngagement({ data }: any) {
    const [percentage, setPercentage] = useState(0);
    const targetPercentage = 90;
    const strokeDasharray = 599.74; // Circumference of the circle
  
    useEffect(() => {
      // Trigger the percentage increase animation
      let currentPercentage = 0;
      const interval = setInterval(() => {
        if (currentPercentage < targetPercentage) {
          currentPercentage += 1;
          setPercentage(currentPercentage);
        } else {
          clearInterval(interval);
        }
      }, 16); // Adjust the interval time as needed for the animation speed
  
      return () => clearInterval(interval);
    }, [targetPercentage]);
  
    const strokeDashoffset =
      strokeDasharray - (percentage / 100) * strokeDasharray;
  
    return (
      <div className="col-span-4 flex flex-col justify-between rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
        {/* title */}
        <div className="flex justify-between">
          <h6 className="text-lg font-normal">Student Engagement</h6>
          <MdArrowOutward className="text-xl text-zinc-900" />
        </div>
        {/* Progress bar */}
        <div className="relative">
          <svg
            width="200"
            height="200"
            viewBox="-26.375 -26.375 263.75 263.75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              r="95.5"
              cx="105.5"
              cy="105.5"
              fill="transparent"
              stroke="#9d95ab"
              strokeWidth="25"
              strokeDasharray={strokeDasharray}
              strokeDashoffset="0"
            ></circle>
            <circle
              r="104.5"
              cx="105.5"
              cy="105.5"
              stroke="#7a4d8b"
              strokeWidth="40"
              strokeLinecap="butt"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="progress-circle"
            ></circle>
            <text
              x="60px"
              y="122px"
              fill="#454459"
              fontSize="49px"
              fontWeight="bold"
              style={{ transform: "rotate(90deg) translate(-6px, -216px)" }}
            >
              {percentage}%
            </text>
            <text
              x="60px"
              y="122px"
              fill="#000000"
              fontSize="16px"
              fontWeight="normal"
              style={{ transform: "rotate(90deg) translate(-3px, -196px)" }}
            >
              Active users
            </text>
          </svg>
          <div className="absolute right-0 top-0 z-20 flex items-center gap-2 rounded-2xl bg-blue-500/20 p-2 backdrop-blur-sm backdrop-filter">
            <HiCursorClick className="text-4xl text-yellow-500" />
            <p className="flex flex-col">
              <span className="text-2xl font-medium text-black">67%</span>
              <span className="text-zinc-500">Interaction</span>
            </p>
          </div>
          <div className="absolute right-0 top-24 z-20 flex items-center gap-2 rounded-2xl bg-blue-500/20 p-2 backdrop-blur-sm backdrop-filter">
            <FaStar className="text-4xl text-yellow-500" />
            <p className="flex flex-col">
              <span className="text-2xl font-medium text-black">4.5/5</span>
              <span className="text-zinc-500">Reviews</span>
            </p>
          </div>
        </div>
        {/* footer */}
        <div className="relative bottom-0 left-0 flex justify-between">
          <p className="flex flex-col items-center text-center text-xs">
            <span className="flex items-center gap-2 text-base font-bold text-black">
              <FaRegCheckCircle className="text-blue-500" />
              78%
            </span>
            <span>Platform Usage</span>
          </p>
          <p className="flex flex-col items-center text-center text-xs">
            <span className="flex items-center gap-2 text-base font-bold text-black">
              <FaRegCheckCircle className="text-blue-500" />
              80%
            </span>
            <span>Retention Rate</span>
          </p>
          <p className="flex flex-col items-center text-center text-xs">
            <span className="flex items-center gap-2 text-base font-bold text-black">
              <FaRegCheckCircle className="text-blue-500" />
              90%
            </span>
            <span>Skill Mastery</span>
          </p>
        </div>
      </div>
    );
  }