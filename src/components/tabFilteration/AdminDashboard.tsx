"use client";
import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaRegClipboard,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import StudentEngagement from "../reusable/circulargraph";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // defs,
  // linearGradient,
  // stop,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IoBookOutline,
  IoChatbubbleEllipsesOutline,
  IoCloseOutline,
  IoHelpCircleOutline,
  IoPeople,
} from "react-icons/io5";
import { GoBell, GoDownload, GoPlus } from "react-icons/go";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BsFilterLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button";
import classNames from "classnames";

import { DateRangePicker } from "../ui/date-range-picker";
import { useRouter } from "next/navigation";
import UpcomingTasks from "../reusable/upcomingTask";
import Staff from "../reusable/staffListing";

export default function AdminDashboard({ tab, setMobileMenu }: any) {
  const router = useRouter();
  function handleSearch() {
    // search operation
  }

  // Courses To Show
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleCoursesSeeAllClick = () => {
    setShowAllCourses(!showAllCourses);
  };

  const coursesToShow = showAllCourses
    ? tab?.content?.courses
    : tab?.content?.courses?.slice(0, 4);

  // Staff To Show

  return (
    <>
      {/* Title and Search Section  */}
      <div className="flex flex-wrap gap-5 w-full justify-between pb-6">
        {/* Left Side  */}
        <div>
          <div className="flex justify-between  items-center mb-2">
            {tab?.content?.title && (
              <h2 className="text-xl">{tab?.content?.title} </h2>
            )}
            <button
              className="sm:hidden block rounded-lg py-1 px-2 font-bold bg-white shadow-xl"
              onClick={() => {
                setMobileMenu((pre: any) => !pre);
              }}
            >
              DG
            </button>
          </div>
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
        <div className="col-span-9 sm:pr-5 max-xl:col-span-12">
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
          {/* section 1 - Overview */}
          <h2 className="mb-3 text-xl">Overview</h2>
          <div className="flex gap-5 w-full overflow-x-auto">
            <Card
              icon={<PiStudentBold />}
              iconBgColor="bg-purple-400"
              text="Total Students"
              value={tab?.content?.totalStudents}
              bgColor="bg-purple-100"
            />
            <Card
              icon={<GiTeacher />}
              iconBgColor="bg-indigo-400"
              text="Teachers"
              value={tab?.content?.totalTeachers}
              bgColor="bg-indigo-100"
            />
            <Card
              icon={<FaGraduationCap />}
              iconBgColor="bg-emerald-400"
              text="Total Course"
              value={tab?.content?.totalCourse}
              bgColor="bg-emerald-100"
            />
            <Card
              icon={<TiTickOutline />}
              iconBgColor="bg-lime-400"
              text="Total Fees"
              value={tab?.content?.completionRate}
              bgColor="bg-lime-100"
            />
          </div>
          {/* Section 2 - Report & Analytics  */}
          <div className="my-5">
            <div className="flex justify-between">
              {/* Title  */}
              <div className="flex w-full justify-between">
                <h6 className="mb-3 text-xl">Report & Analytics</h6>
                <button
                  onClick={() =>
                    router.push(
                      `/?tab=${encodeURIComponent("Report & Analytics")}`
                    )
                  }
                  className="hover:underline"
                >
                  See All
                </button>
              </div>
            </div>
            <div className="sm:grid grid-cols-10 gap-5">
              {/* ProgressBar  */}
              <StudentEngagement data={tab?.content?.studentEngagement} />
              {/* Chart  */}
              <MonthlyProgressChart
                data={tab?.content?.monthlyProgressChartData}
              />
            </div>
          </div>
          {/* Section 3 - Manage Courses  */}
          <div className="my-5">
            <div className="flex w-full justify-between">
              <h6 className="mb-3 text-xl">Manage Courses</h6>
              <button
                className="hover:underline"
                onClick={handleCoursesSeeAllClick}
              >
                {showAllCourses ? "Show Less" : "See All"}
              </button>
            </div>
            <div className="gap-3 flex overflow-y-auto p-2 pl-0 pt-0 no-scrollbar">
              {coursesToShow.map((course: any, index: number) => (
                <CourseCard key={course?.id} data={course} index={index} />
              ))}
            </div>
          </div>
          {/* Section 4 - Manage Staff  */}
          <Staff tab={tab} />
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
          {/* Sales Information  */}
          <SalesInformation data={tab?.content?.salesStatisticsChartData} />
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

function Card({ icon, text, value, iconBgColor, bgColor }: any) {
  return (
    <div
      className={`flex items-center gap-2 rounded-2xl ${bgColor} p-5 shadow-xl`}
    >
      <p className="flex flex-col gap-y-1">
        <span className="text-2xl font-medium text-black">{value}</span>
        <span className="text-nowrap text-sm font-medium text-zinc-500">
          {text}
        </span>
      </p>
      <div
        className={`h-min rounded-full ${iconBgColor} p-4 text-4xl text-zinc-800`}
      >
        {icon}
      </div>
    </div>
  );
}

function MonthlyProgressChart({ data }: any) {
  const [time, setTime] = useState("Yearly");
  const [rateDirection, setRateDirection] = useState(true);

  function handleTimeDuration(time: string) {
    setTime(time);
  }
  const formatYAxis = (tick: any) => {
    if (tick >= 1000000) {
      return `${tick / 1000000}M`;
    } else if (tick >= 1000) {
      return `${tick / 1000}K`;
    }
    return tick;
  };
  return (
    <div className="col-span-6 rounded-2xl border-2 border-foreground/15 p-3">
      {/* Title with filter  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Monthly Registrations</h6>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
            {time} <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["Yearly", "Monthly", "Daily"].map((item, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleTimeDuration(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Chart  */}
      <div className="flex flex-col">
        <p className="mb-3">Students registered in last month</p>
        <p className="flex gap-2">
          <span className="text-2xl font-medium text-black">+25,000</span>
          <span className="mt-2 flex gap-1 text-sm font-medium text-foreground">
            2.3%{" "}
            {rateDirection ? (
              <FaArrowTrendUp className="text-green-500" />
            ) : (
              <FaArrowTrendDown className="text-red-500" />
            )}
          </span>
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C86CEA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#D17AF2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45} // Rotate X-axis labels to an angle
            textAnchor="end" // Anchor X-axis labels at the end
            interval={0} // Display all labels without skipping
            tick={{ fontSize: 12 }} // Adjust font size of X-axis labels
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatYAxis}
            // label={{
            //   value: "Student Joined",
            //   angle: -90,
            //   position: "insideCenter",
            //   className: "custom-y-axis-label",
            // }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="joined"
            stroke="#7A4D8B"
            strokeWidth="2"
            fill="url(#colorUv)"
            yAxisId="right"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function SalesInformation({ data }: any) {
  const formatYAxis = (tick: any) => {
    if (tick >= 1000000) {
      return `${tick / 1000000}M`;
    } else if (tick >= 1000) {
      return `${tick / 1000}K`;
    }
    return tick;
  };

  return (
    <div className="min-h-max rounded-2xl border-2 border-foreground/15 bg-gradient-to-tr from-purple-100 from-10% via-white to-purple-100 p-3">
      {/* Title  */}
      <div className="flex justify-between">
        <h6 className="text-lg font-normal">Sales Information</h6>
        <BsThreeDotsVertical className="cursor-pointer text-zinc-400" />
      </div>
      <p className="mb-3 text-sm font-medium">
        <span className="text-green-600">Closed at:</span> 7th June, 2024
      </p>
      {/* Sales Information  */}
      <div className="mb-3 flex gap-4">
        <p className="flex flex-col">
          <span className="text-xs">Net sales</span>
          <span className="text-2xl font-medium text-black">₹ 25k</span>
        </p>
        <p className="flex flex-col">
          <span className="text-xs">Refunds</span>
          <span className="text-2xl font-medium text-black">₹ 2k</span>
        </p>
        <p className="flex flex-col">
          <span className="text-xs">Commissions/Fees</span>
          <span className="text-2xl font-medium text-black">₹ 2.5k</span>
        </p>
      </div>
      {/* Statistics Chart Text */}
      <p>Statistics</p>
      <div className="flex gap-5">
        <p className="flex gap-1 text-black">
          <span>2.7K</span>
          <span className="mt-1.5 text-xs">Sales</span>
        </p>
        <p className="flex gap-1 text-red-500">
          <span>3.8K</span>
          <span className="mt-1.5 text-xs">Target</span>
        </p>
      </div>
      {/* Statistics Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C86CEA" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#D17AF2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-45} // Rotate X-axis labels to an angle
            textAnchor="end" // Anchor X-axis labels at the end
            interval={0} // Display all labels without skipping
            tick={{ fontSize: 12 }} // Adjust font size of X-axis labels
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={formatYAxis}
            // label={{
            //   value: "Sales",
            //   angle: -90,
            //   position: "insideCenter",
            //   className: "custom-y-axis-label",
            // }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="joined"
            stroke="#7A4D8B"
            strokeWidth="2"
            fill="url(#colorUv)"
            yAxisId="right"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function CourseCard({ data, index }: any) {
  const colorArr = ["blue", "red", "green", "yellow", "purple"];
  const colorIndex = index % colorArr.length;
  const selectedColor = colorArr[colorIndex];

  return (
    <div
      className={classNames(
        "relative rounded-xl border border-zinc-300 p-3 pt-5 shadow-md min-w-[220px]",
        `bg-${selectedColor}-100 bg-opacity-40`
      )}
    >
      {data?.isPopular && (
        <p className="absolute left-0 top-0 w-min text-nowrap rounded-ee-2xl rounded-ss-xl bg-pink-100 px-4 py-1 text-xs text-red-600">
          Popular Course
        </p>
      )}
      <IoCloseOutline className="absolute right-2 top-2 cursor-pointer text-lg text-zinc-500" />
      <div className="m-3 flex justify-between">
        <div
          className={classNames(
            "rounded-lg bg-white p-2 text-xl",
            `text-${selectedColor}-500`
          )}
        >
          {data?.icon}
        </div>
        <Button
          className={classNames(
            "rounded-e-full rounded-s-full bg-white shadow-[0px_0px_2px_4px_#e2e8f0] hover:bg-zinc-50",
            `text-${selectedColor}-500`
          )}
        >
          Enroll Now
        </Button>
      </div>
      <h6 className="mx-1 my-3 text-zinc-950">{data?.title}</h6>
      <div className="flex justify-evenly rounded-2xl bg-white p-3">
        <p className="flex items-center gap-2 font-medium text-black">
          <IoBookOutline />
          24
        </p>
        <p
          className={classNames(
            "flex items-center gap-2 font-medium",
            `text-${selectedColor}-500`
          )}
        >
          {" "}
          |{" "}
        </p>
        <p className="flex items-center gap-2 font-medium text-black">
          <FaRegClipboard />8
        </p>
        <p
          className={classNames(
            "flex items-center gap-2 font-medium",
            `text-${selectedColor}-500`
          )}
        >
          {" "}
          |{" "}
        </p>
        <p className="flex items-center gap-2 font-medium text-black">
          <IoPeople />
          99
        </p>
      </div>
    </div>
  );
}
