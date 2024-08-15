import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import { Progress } from "@radix-ui/react-progress";

export default function Staff({ tab }: any) {
  const [showAllStaff, setShowAllStaff] = useState(false);

  const handleStaffSeeAllClick = () => {
    setShowAllStaff(!showAllStaff);
  };

  const staffToShow = showAllStaff ? tab?.content?.staff : tab?.content?.staff?.slice(0, 4);

  return (
    <div className="my-5">
      <div className="flex w-full justify-between">
        <h6 className="mb-3 text-xl">Manage Staff</h6>
        <button className="hover:underline" onClick={handleStaffSeeAllClick}>
          {showAllStaff ? "Show Less" : "See All"}
        </button>
      </div>
      <div className="overflow-y-auto">
        {/* Table Head */}
        <div className="mb-5 min-w-[650px] grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-1 rounded-xl border border-zinc-300 bg-purple-200 px-4 py-2 shadow-md">
          <p className="col-span-3 text-purple-900">Course Name</p>
          <p className="col-span-3 text-center text-purple-900">Instructor</p>
          <p className="col-span-2 text-center text-purple-900">Progress</p>
          <p className="col-span-2 text-center text-purple-900">Level</p>
          <p className="col-span-3 text-center text-purple-900">
            Next Assignment
          </p>
          <p className="col-span-1 text-end text-purple-900">Action</p>
        </div>
        {/* Table Rows */}
        <ul className="min-w-[650px]">
          {staffToShow?.map((staff: any) => (
            <li
              key={staff?.id}
              className="my-3 grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-1 rounded-xl border border-zinc-300 bg-white px-4 py-1 text-sm shadow-md"
            >
              <p className="col-span-3 my-auto font-medium text-zinc-500">
                {staff?.courseName}
              </p>
              <p className="col-span-3 my-auto flex items-center gap-2 font-medium text-zinc-800">
                <Image
                  src={staff?.instructor?.avatar?.url}
                  width={24}
                  height={24}
                  alt="avatar"
                  className="h-8 w-8 rounded-full"
                />
                {staff?.instructor?.name}
              </p>
              <div className="col-span-2 my-auto flex items-center gap-2 font-medium text-purple-900">
                <Progress className="h-1.5" value={staff?.progress} />
                <p className="text-zinc-500">{staff?.progress}%</p>
              </div>
              <div className="col-span-2 my-auto flex justify-center text-purple-900">
                <div
                  className={`w-min rounded-md border-2 px-2 py-1 font-medium capitalize ${
                    staff.level === "beginner"
                      ? "border-green-500 bg-green-100 text-green-600"
                      : staff.level === "medium"
                      ? "border-orange-500 bg-orange-100 text-orange-600"
                      : "border-purple-500 bg-purple-100 text-purple-600"
                  }`}
                >
                  {staff?.level}
                </div>
              </div>
              <p className="col-span-3 my-auto text-center text-zinc-700">
                {staff?.nextAssignment}
              </p>
              <p className="col-span-1 my-auto flex justify-end text-end text-purple-900">
                <CiSettings className="cursor-pointer text-3xl" />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}