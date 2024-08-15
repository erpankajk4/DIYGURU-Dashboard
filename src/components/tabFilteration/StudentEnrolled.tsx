"use client";
import React, { useEffect, useState } from "react";
import {
  // FaGraduationCap,
  FaRegCheckCircle,
  FaStar,
} from "react-icons/fa";

import { RiBook2Line, RiSearchLine } from "react-icons/ri";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IoChatbubbleEllipsesOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import { GoBell, GoDownload, GoPlus } from "react-icons/go";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { HiCursorClick } from "react-icons/hi";
import { BsFilterLeft, BsThreeDotsVertical } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { Button } from "../ui/button";
import classNames from "classnames";
import { CiSettings } from "react-icons/ci";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { DateRangePicker } from "../ui/date-range-picker";
import { useRouter } from "next/navigation";
import { studentData } from "@/data/studentData";

export default function StudentEnrolled({
  tab,
  setMobileMenu,
}: any) {
  const router = useRouter();
  function handleSearch() {
    // search operation
  }

  // Staff To Show
  const [showAllStaff, setShowAllStaff] = useState(false);

  const handleStaffSeeAllClick = () => {
    setShowAllStaff(!showAllStaff);
  };

  const StaffToShow = showAllStaff
    ? tab?.content?.staff
    : tab?.content?.staff?.slice(0, 4);

  return (
    <>
      {/* Title and Search Section  */}
      <div className="flex flex-wrap gap-5 w-full justify-between pb-6">
        {/* Left Side  */}
        <div>
            <div className="flex justify-between  items-center mb-2">
          {tab?.content?.title && (
            <h2 className="text-xl">{tab?.content?.title} </h2>
          )}<button
          className="sm:hidden block rounded-lg py-1 px-2 font-bold bg-white shadow-xl"
          onClick={() => {
            setMobileMenu((pre: any) => !pre);
          }}
        >
          DG
        </button></div>
          
          {tab?.content?.subtitle && (
            <p className="text-sm text-zinc-600">{tab?.content?.subtitle}</p>
          )}
        </div>
        {/* Right Side  */}
        <div className="flex gap-1 sm:gap-3">
          <div className="relative flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <div className="absolute right-1 top-2">
              <p className="flex h-2 w-2 items-center justify-center rounded-full border-2 border-white bg-red-500 p-1 text-xs text-white"></p>
            </div>
            <IoChatbubbleEllipsesOutline className="text-xl text-zinc-950" />
          </div>
          <div className="relative flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <div className="absolute right-2 top-2">
              <p className="flex h-2 w-2 items-center justify-center rounded-full border-2 border-white bg-red-500 p-1 text-xs text-white"></p>
            </div>
            <GoBell className="text-xl text-zinc-950" />
          </div>
          <div className="flex h-10 cursor-pointer items-center rounded-xl border-2 border-foreground/15 bg-white px-2">
            <IoHelpCircleOutline className="text-xl text-zinc-950" />
          </div>
          {/* Search Bar  */}
          <div className="flex h-10 max-w-56 items-center rounded-xl border-2 border-foreground/15 bg-white px-5 pr-3">
            <input
              className="w-full h-fit focus:outline-none"
              type="text"
              placeholder="Search here..."
              onChange={handleSearch}
            />
            <RiSearchLine className="text-xl text-zinc-950" />
          </div>
          {/* Avatar  */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-9 sm:pr-10 max-xl:col-span-12">
          {/* Section 0 - Filter Section  */}
          <div className="flex gap-2 overflow-y-auto mb-5">
            {/* Date Picker  */}
            <DateRangePicker
              onUpdate={(values) => console.log(values)}
              initialDateFrom="2024-06-1"
              // initialDateTo="2024-06-1"
              align="start"
              locale="en-GB"
              showCompare={true}
            />
            {/* Download Report */}
            <Button
              variant="outline"
              className="rounded-full border-2 bg-white text-black"
            >
              <GoDownload className="mr-1 text-lg" />
              Download Report
            </Button>
            {/* Add widget  */}
            <Button
              variant="outline"
              className="rounded-full border-2 bg-white text-black"
            >
              <GoPlus className="mr-1 text-lg" />
              Add widget
            </Button>
            {/* Filter  */}
            <Filter />
          </div>

          {/* Section 4 - Manage Staff  */}
          <div className="my-5">
            <div className="flex w-full justify-between">
              <h6 className="mb-3 text-xl">Students Enrolled</h6>
              <button
                className="hover:underline"
                onClick={handleStaffSeeAllClick}
              >
                {showAllStaff ? "Show Less" : "See All"}
              </button>
            </div>
            <Staff data={StaffToShow} />
          </div>
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
          {/* ProgressBar circular */}
          <StudentEngagement data={tab?.content?.studentEngagement} />
          {/* Upcoming Tasks */}
          <UpcomingTasks data={tab?.content} />
        </aside>
      </div>
    </>
  );
}

function Filter() {
  const handleFilter = (item: string) => {
    // handle filter logic here
    console.log("Filter", item);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-none gap-1 rounded-full border-2 bg-white text-black px-4">
        <BsFilterLeft className="text-lg" />
        Filter <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {["Yearly", "Monthly", "Daily"].map((item, index) => (
          <DropdownMenuItem key={index} onClick={() => handleFilter(item)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function StudentEngagement({ data }: any) {
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

function UpcomingTasks({ data }: any) {
  return (
    <div className="min-h-max rounded-2xl border-2 border-foreground/15 bg-gradient-to-tr from-purple-100 from-10% via-white to-purple-100 p-3">
      {/* Title  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Upcoming Tasks</h6>
        <BsThreeDotsVertical className="cursor-pointer text-zinc-400" />
      </div>
      {/* Card 1  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Course Updates</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <SlBookOpen className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Update Lesson 5 in "Advanced Woodworking"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Update
              </button>
            </div>
          </li>
          <li className="p-2">
            <div className="flex gap-2">
              <SlBookOpen className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Update Lesson 5 in "Advanced Woodworking"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Update
              </button>
            </div>
          </li>
        </ul>
        <ul></ul>
      </div>
      {/* Card 2  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Assignments</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <RiBook2Line className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Grade submissions for "DIY Electronics"
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Grade Now
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Card 3  */}
      <div className="my-1 min-h-max rounded-2xl border-2 border-foreground/15 bg-white p-3">
        {/* Card Title  */}
        <div className="flex justify-between">
          <h6 className="font-medium">Other Tasks</h6>
          <IoMdClose className="cursor-pointer text-zinc-500" />
        </div>
        {/* list  */}
        <ul>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <IoChatbubbleEllipsesOutline className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Respond to student queries
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Respond
              </button>
            </div>
          </li>
          <li className="border-b border-foreground/15 p-2">
            <div className="flex gap-2">
              <IoChatbubbleEllipsesOutline className="text-4xl text-black" />
              <p className="flex flex-col">
                <span className="text-sm text-foreground">
                  Review course feedback and ratings
                </span>
                <span className="text-xs text-green-600">
                  Deadline: June 15
                </span>
              </p>
            </div>
            <div className="flex-end flex">
              <button className="ml-auto rounded-e-full rounded-s-full bg-foreground px-2 py-1 text-sm text-white hover:bg-foreground/90">
                Respond
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Staff({ data }: any) {
  return (
    <div className="overflow-y-auto">
      {/* Table Head  */}
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
      {/* Table Rows  */}
      <ul className="min-w-[650px]">
        {studentData?.staff?.map((staff: any) => (
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
                    : "border -purple-500 bg-purple-100 text-purple-600"
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
  );
}
