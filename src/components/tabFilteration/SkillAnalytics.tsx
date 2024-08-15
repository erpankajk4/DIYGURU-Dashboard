"use client";
import React, { useState, PureComponent, FunctionComponent } from "react";

import { FaGraduationCap, FaRegClipboard } from "react-icons/fa";
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
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  LineChart,
  LabelList,
  Line,
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
import { IoIosArrowDown, IoMdStopwatch } from "react-icons/io";

import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { BsFilterLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button";
import classNames from "classnames";

import { DateRangePicker } from "../ui/date-range-picker";
import { useRouter } from "next/navigation";
import UpcomingTasks from "../reusable/upcomingTask";
import Staff from "../reusable/staffListing";
import { Progress } from "@/components/ui/progress";
import CardPerform from "../reusable/Cards/PerformanceStatistic";
import { MdArrowOutward } from "react-icons/md";
import Cardevaluate from "../reusable/Cards/evaluationcard";

export default function SkillAnalytic({ tab, setMobileMenu }: any) {
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
          <h2 className="mb-3 text-xl">Skill Summary</h2>
          <div className="flex gap-4 w-full overflow-x-auto p-4">
            {tab?.content?.overview?.map((details: any) => (
              <Card
                key={details.id}
                text={details.name}
                value={details.value}
                data={details.data}
                color="orange"
              />
            ))}
          </div>
          {/* Section 2 - performance level  */}
          <div className="my-5">
          <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-none gap-1 rounded-full border-2 bg-zinc-200 text-zinc-700 px-4 py-3 text-xl font-medium">
        Performance Level: <span className="text-black">Begginer</span> <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {["Begginer", "Medium","Perfect", "Advance"].map((item, index) => (
          <DropdownMenuItem key={index}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
            {/* Section 4 - last chart */}
            <div className="rounded-2xl border-2 border-foreground/15 p-3 w-full my-5">
            <h6 className="mb-3 text-xl">Order Analytics</h6>
            <LastChart />
          </div>
          {/* Section 3 - hours spent popular courses  */}
          <div className="my-5">
            <div className="sm:grid grid-cols-10 gap-5">
              <div className="col-span-10 sm:col-span-5 max-sm:mb-5">
                <h6 className="mb-3 text-xl">Skill Clustering</h6>
                <div className="rounded-2xl border-2 border-foreground/15 p-3 ">
                <EngagementMetric />
                </div>
              </div>
              <div className="col-span-10 sm:col-span-5  max-sm:mb-5">
                <h6 className="mb-3 text-xl">Skill Gap Analysis</h6>
                <div className="rounded-2xl border-2 border-foreground/15 p-4 ">
                  <div className="flex justify-between items-center w-full mb-2">
                    <div>
                      <h3 className="text-3xl font-semibold">
                        {tab?.content?.totalCourse}+
                      </h3>
                      <p className="text-zinc-700">Common Issues</p>
                    </div>
                    <div className="flex flex-col items-end">
                      {tab?.content && (
                        <h4
                          className={`px-3 py-1 w-20 text-center rounded-2xl mr-0 ${
                            tab.content.isgrowthInCourse
                              ? "text-green-700 bg-green-200"
                              : "text-red-700 bg-red-200"
                          }`}
                        >
                          {tab.content.isgrowthInCourse ? "+" : "-"}
                          {tab.content.growthlastmonthInCourse}
                        </h4>
                      )}{" "}
                      <p className="text-zinc-700">From last month</p>
                    </div>
                  </div>
                  <Activestudents data={tab?.content?.courses} />
                </div>
              </div>
            </div>
          </div>
        
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
          {/* Sales Information  */}
          <SalesInformation data={tab?.content?.salesStatisticsChartData} />
          {/* evaluation cards */}
          <div className="col-span-4 flex flex-col justify-between rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
            {/* title */}
            <div className="flex justify-between">
              <h6 className="text-lg font-normal">Evaluation Matric</h6>
              <MdArrowOutward className="text-xl text-zinc-900" />
            </div>

            {/* evaluated cards */}
            <div className="flex justify-between gap-2">
              <Cardevaluate
                icon={<IoMdStopwatch className="text-green-500 w-6 h-6" />}
                name="Hours logged in"
                number="08"
                numbg="bg-green-500"
              />

              <Cardevaluate
                icon={<IoMdStopwatch className="text-green-500 w-6 h-6" />}
                name="Hours logged in"
                number="08"
                numbg="bg-green-500"
              />

              <Cardevaluate
                icon={<IoMdStopwatch className="text-green-500 w-6 h-6" />}
                name="Hours logged in"
                number="08"
                numbg="bg-green-500"
              />
            </div>
          </div>

          <div className="col-span-4 flex flex-col justify-between rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
            {/* title */}
            <div className="flex justify-between">
              <h6 className="text-lg font-normal">Performance statistics</h6>
              <MdArrowOutward className="text-xl text-zinc-900" />
            </div>
            <div className="flex justify-between gap-1">
              <CardPerform
                bg="bg-green-400"
                grade="80"
                text="Task Efficiency"
              />

              <CardPerform
                bg="bg-blue-400"
                grade="90"
                text="Attenda-nce Rate"
              />

              <CardPerform bg="bg-red-400" grade="40" text="Quality of Work" />
            </div>
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

function Card({ text, value, data }: any) {
  return (
    <div className={` rounded-2xl p-5 shadow-xl w-full min-w-[195px]`}>
      {" "}
      <p className="text-md text-black mb-2">{text}</p>
      <h3 className="text-3xl mb-2">{value}</h3>
      <AreaChart
        width={150}
        height={40}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#800080"
          strokeWidth={2}
          fill="url(#colorUv)"
        />
      </AreaChart>
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


// Piechart
function Piechart() {
  const data = [
    { name: "Active", value: 38 },
    { name: "Completed", value: 20 },
    { name: "Incomplete", value: 10 },
    { name: "Upcoming", value: 24 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const [time, setTime] = useState("Monthly");

  function handleTimeDuration(time: React.SetStateAction<string>) {
    setTime(time);
  }

  return (
    <>
      <div className="flex justify-between w-full">
        <h6 className="text-lg font-normal">Enrollment Status</h6>
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
          cx={150}
          cy={100}
          innerRadius={50}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {data.map((_entry, index) => (
        <div key={index} className="flex items-center gap-2 py-1 w-full">
          <div
            className="w-3 h-3"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          ></div>
          <h3 className="font-medium text-foreground w-full">
            {_entry.name}
            <span className="float-right text-black font-semibold">
              {_entry.value}%
            </span>
          </h3>
        </div>
      ))}
    </>
  );
}

// Barchart and active courses
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
          <Bar dataKey="Study" stackId="a" fill="#f8e5a2" />
          <Bar dataKey="Exams" stackId="a" fill="#f9f2dc" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

function Activestudents({ data }: any) {
  return (
    <div>
      {data.map((course: any) => (
        <div key={course.id} className="mb-2">
          <h3 className="flex justify-between mb-1 font-normal text-lg">
            {course.title} <span>{course.Popularity}%</span>
          </h3>
          <Progress value={course.Popularity} className="w-full" />
        </div>
      ))}
    </div>
  );
}

//   last chart

function LastChart() {
  const data = [
    { name: "Page A", online: 4000, offline: 2400 },
    { name: "Page B", online: 3000, offline: 1398 },
    { name: "Page C", online: 2000, offline: 9800 },
    { name: "Page D", online: 2780, offline: 3908 },
    { name: "Page E", online: 1890, offline: 4800 },
    { name: "Page F", online: 2390, offline: 3800 },
    { name: "Page G", online: 3490, offline: 4300 },
  ];

  const CustomizedLabel = ({ x, y, stroke, value }: any) => (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );

  const CustomizedAxisTick = ({ x, y, payload }: any) => (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="online"
          stroke="#ef4f92"
          name="Online order"
          strokeWidth={3}
        >
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line
          type="monotone"
          dataKey="offline"
          stroke="blue"
          name="Offline order"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
// engagement card
function EngagementMetric() {
    const data = [
      { name: "HTML/CSS", value: "80%", bg: "#bbf7d0" },
      { name: "Python Programming", value: "28%", bg: "#86efac" },
      { name: "Javascript", value: "40%", bg: "#4ade80" },
      { name: "Machine Learning", value: "30%", bg: "#16a34a" },
      { name: "Statistical Analysis", value: "50%", bg: "#166534" },
      { name: "SEO (Search Engine Optimization)", value: "58%", bg: "#052e16" },
    ];
    const [time, setTime] = useState("Monthly");
  
    function handleTimeDuration(time: React.SetStateAction<string>) {
      setTime(time);
    }
  
    return (
      <>
        <div className="flex justify-between w-full">
          <h6 className="text-lg font-normal">Skill Stack</h6>
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
        <div className="flex items-center gap-2 py-1 flex-nowrap h-12 w-full my-4">
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
          <div key={index} className="flex items-center gap-2 py-1 w-full ">
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