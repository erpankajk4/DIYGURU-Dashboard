"use client";
import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaRegClipboard } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiH4, RiSearchLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import StudentEngagement from "../reusable/circulargraph";
import { PieChart, Pie, Sector, Cell } from "recharts";
import "react-calendar-heatmap/dist/styles.css";
import CalendarHeatmap from "react-calendar-heatmap";
import {
  Legend,
  AreaChart,
  Area,
  XAxis,
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // defs,
  // linearGradient,
  // stop,
} from "recharts";
import { Progress } from "@/components/ui/progress";
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
import { MdArrowOutward } from "react-icons/md";
import { time } from "console";
import { PureComponent } from "react";
import { any } from "zod";

export default function StudentReport({ tab, setMobileMenu }: any) {
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

  function handleTimeDuration(item: string): void {
    throw new Error("Function not implemented.");
  }

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
                <h6 className="mb-3 text-xl">Student Report</h6>
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
          {/* Section 2 Hours spent, active student  */}
          <div className="my-5">
            <div className="sm:grid grid-cols-10 gap-5">
              <div className="col-span-10 sm:col-span-6 max-sm:mb-5">
                <h6 className="mb-3 text-xl">Hours Spent</h6>
                <div className="rounded-2xl border-2 border-foreground/15 p-3 ">
                  <Barchart data={tab?.content?.studentreport} />
                </div>
              </div>
              <div className="col-span-10 sm:col-span-4  max-sm:mb-5">
                <h6 className="mb-3 text-xl">Active students</h6>
                <div className="rounded-2xl border-2 border-foreground/15 p-4 ">
                  <div className="flex justify-between items-center w-full mb-2">
                    <div>
                      <h3 className="text-3xl font-semibold">
                        {tab?.content?.totalStudents}+
                      </h3>
                      <p className="text-zinc-700">Students</p>
                    </div>
                    <div className="flex flex-col items-end">
                      {tab?.content && (
                        <h4
                          className={`px-3 py-1 w-20 text-center rounded-2xl mr-0 ${
                            tab.content.isgrowth
                              ? "text-green-700 bg-green-200"
                              : "text-red-700 bg-red-200"
                          }`}
                        >
                          {tab.content.isgrowth ? "+" : "-"}
                          {tab.content.growthlastmonth}
                        </h4>
                      )}{" "}
                      <p className="text-zinc-700">From last month</p>
                    </div>
                  </div>
                  <Activestudents data={tab?.content?.students} />
                </div>
              </div>
            </div>
          </div>
          {/* monthly activity */}
          <div className="my-5">
            {/* Title  */}
            <h6 className="mb-3 text-xl">Monthly Activity</h6>
            <div className="rounded-2xl border-2 border-foreground/15 p-4 ">
              <CalendarHeatmap
                startDate={new Date("2016-01-01")}
                endDate={new Date("2016-08-30")}
                values={[
                  { date: "2016-01-01", count: 12 },
                  { date: "2016-01-22", count: 122 },
                  { date: "2016-02-30", count: 38 },
                  { date: "2016-02-01", count: 12 },
                  { date: "2016-02-22", count: 18 },
                  { date: "2016-03-30", count: 38 }, { date: "2016-01-01", count: 13 },
                  { date: "2016-03-22", count: 188 },
                  { date: "2016-04-30", count: 38 }, { date: "2016-3-09", count: 126 },
                  { date: "2016-04-22", count: 122 },
                  { date: "2016-04-30", count: 38 }, { date: "2016-06-04", count: 121 },
                  { date: "2016-01-22", count: 122 },
                  { date: "2016-01-30", count: 38 }, { date: "2016-08-07", count: 12 },
                  { date: "2016-5-22", count: 122 },
                  { date: "2016-5-30", count: 38 },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
          {/* Pie chart  performance progress  */}
          <h6 className="mb-3 text-xl">Performance Progress</h6>
          <div className="col-span-4 flex flex-col w-full justify-between items-center rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
            <Piechart />
          </div>

          {/* Engagement Metrics */}
          <h6 className="mb-3 text-xl">Engagement Metrics</h6>
          <div className="col-span-4 flex flex-col w-full justify-between items-center rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
            {/* title */}

            <EngagementMetric />
          </div>
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

function Piechart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const [time, setTime] = useState("Monthly");

  function handleTimeDuration(time: string) {
    setTime(time);
  }
  return (
    <>
      <div className="flex justify-between w-full">
        <h6 className="text-lg font-normal">Point Progress</h6>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
            {time}
            <IoIosArrowDown />
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
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx={140}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <h3 className="text-center font-medium text-2xl">Great Progress 🎉</h3>
      {data.map((_entry, index) => (
        <div key={index} className="flex items-center gap-2 py-1 w-full">
          <div
            className="w-3 h-3"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          ></div>
          <h3 className="font-medium text-foreground w-full ">
            {_entry.name}
            <span className="float-right text-black font-semibold">
              {_entry.value}
            </span>
          </h3>
        </div>
      ))}
    </>
  );
}

function EngagementMetric() {
  const data = [
    { name: "Live Session Participation", value: "80%", bg: "#bbf7d0" },
    { name: "Assignment Submission", value: "28%", bg: "#86efac" },
    { name: "Video Watch Time", value: "40%", bg: "#4ade80" },
    { name: "Resource Utilization", value: "30%", bg: "#16a34a" },
    { name: "Quiz Participation", value: "50%", bg: "#166534" },
    { name: "Poll Participation", value: "58%", bg: "#052e16" },
  ];
  const [time, setTime] = useState("Monthly");

  function handleTimeDuration(time: React.SetStateAction<string>) {
    setTime(time);
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <h6 className="text-lg font-normal">Participation Rate</h6>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
            {time}
            <IoIosArrowDown />
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
      <div className="flex items-center gap-2 py-1 flex-nowrap h-12 w-full">
        {data.map((_entry, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              width: _entry.value,
              backgroundColor: _entry.bg,
            }}
          ></div>
        ))}
      </div>
      {data.map((_entry, index) => (
        <div key={index} className="flex items-center gap-2 py-1 w-full">
          <div className="w-3 h-3" style={{ backgroundColor: _entry.bg }}></div>
          <h3 className="font-medium text-foreground w-full">
            {_entry.name}
            <span className="float-right text-black font-semibold">
              {_entry.value}
            </span>
          </h3>
        </div>
      ))}
    </>
  );
}

function Barchart({ data }: any) {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={480}
          height={300}
          data={data}
          className="rounded-2xl"
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `${value}hr`} />
          <Tooltip formatter={(value) => `${value}hr`} />
          <Legend />
          <Bar dataKey="Study" stackId="a" fill="#8bcaf8" />
          <Bar dataKey="Exams" stackId="a" fill="#cbe9ff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

function Activestudents({ data }: any) {
  return (
    <div>
      {data.map((student: any, index: any) => (
        <div key={index} className="mb-2">
          <h3 className="flex justify-between mb-1 font-normal text-lg">
            {student.name} <span>{student.activity}%</span>
          </h3>
          <Progress value={student.activity} className="w-full" />
        </div>
      ))}
    </div>
  );
}
