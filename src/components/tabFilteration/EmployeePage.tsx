"use client";
import React, {  useState } from "react";
import {
  // FaGraduationCap,
  FaRegClipboard,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineAppRegistration } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { RiBook2Line, RiSearchLine } from "react-icons/ri";

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
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
import { BsFilterLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button";
import Image from "next/image";
import { DateRangePicker } from "../ui/date-range-picker";
import { useRouter } from "next/navigation";
import { employeeData } from "@/data/employeeData";
import TableDetail from "@/components/reusable/tableDetail";
import ProfileSection from "../reusable/profileSection";
import Cardlast from "../reusable/Cards/performanceCard";
import Cardevaluate from "../reusable/Cards/evaluationcard";
import CardPerform from "../reusable/Cards/PerformanceStatistic";
import UpcomingTasks from "../reusable/upcomingTask";
import Carddetails from "../reusable/Cards/allDatesCard";

export default function EmployeePage({ tab, setMobileMenu }: any) {
  const router = useRouter();
  function handleSearch() {
    // search operation
  }

  // section for categories function, state all

  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Quiz", "Exams", "Assignments"];

  const showBox = (name2: any) => {
    setActiveTab(name2);
  };

  // Courses To Show
  

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
          {/* section 1 - Overview */}
          <h2 className="mb-3 text-xl">Employee Profile</h2>
          {/* profile section */}
          <ProfileSection database={employeeData} />
          {/* category part  or 2nd part */}
          <div className="flex overflow-x-auto gap-12">
            {tabs.map((tab) => (
              <h3
                key={tab}
                onClick={() => showBox(tab)}
                className={`cursor-pointer font-normal text-lg  p-2 ${
                  activeTab === tab
                    ? "text-foreground font-semibold border-b-2 border-foreground"
                    : ""
                }`}
              >
                {tab}
              </h3>
            ))}
          </div>
          <hr className="my-5" />
          {activeTab == "General" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Carddetails
                  icon={<ImProfile className="text-orange-500 w-6 h-6" />}
                  text="Admission Date"
                  value={employeeData?.data[0]?.AdmissionDate}
                  bgColor="bg-orange-100"
                />
                <Carddetails
                  icon={
                    <MdOutlineAppRegistration className="text-blue-500 w-6 h-6" />
                  }
                  text="Registration No."
                  value={employeeData?.data[0]?.Regno}
                  bgColor="bg-blue-100"
                />
                <Carddetails
                  icon={<MdMenuBook className="text-green-500 w-6 h-6" />}
                  text="Course"
                  value={employeeData?.data[0]?.Course}
                  bgColor="bg-green-100"
                />
                <Carddetails
                  icon={<IoMdStopwatch className="text-purple-500 w-6 h-6" />}
                  text="Course Duration"
                  value={employeeData?.data[0]?.CourseDuration}
                  bgColor="bg-purple-100"
                />
              </div>

              <TableDetail database={employeeData} />
            </>
          )}

          {activeTab == "Quiz" && (
            <div className="p-5 h-52">
              <h1 className="">This section for quiz details</h1>
            </div>
          )}
          {activeTab == "Exams" && (
            <div className="p-5 h-52">
              <h1 className="">This section for Exams details</h1>
            </div>
          )}
          {activeTab == "Assignments" && (
            <div className="p-5 h-52">
              <h1 className="">This section for Assignments details</h1>
            </div>
          )}

          {/* Section 3 - Manage Courses  */}
          <div className="my-5">
            <div className="flex w-full ">
              <h6 className="mb-3 text-xl">Academic Performance</h6>
            </div>
            <div className="flex flex-wrap justify-between max-w-[750px]">
              <Cardlast
                heading="Attendance"
                Te=""
                Tc="145"
                attend="120"
                attempt=""
                unattempt=""
                missed="25"
                passed=""
                failed=""
              />
              <Cardlast
                heading="Quiz"
                Te=""
                Tc=""
                attend=""
                attempt="120"
                unattempt="125"
                missed=""
                passed="25"
                failed="25"
              />
              <Cardlast
                heading="Exams"
                Te="245"
                Tc=""
                attend=""
                attempt="120"
                unattempt="125"
                missed=""
                passed="25"
                failed="25"
              />
              <Cardlast
                heading="Assignment"
                Te="245"
                Tc=""
                attend=""
                attempt="120"
                unattempt="125"
                missed=""
                passed="25"
                failed="25"
              />
            </div>
          </div>
          {/* Section 4 - Manage Staff  */}
        </div>

        {/* Right Aside Section */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
          <div className="col-span-4 flex flex-col justify-between rounded-2xl border-2 border-foreground/15 p-3 max-sm:mb-5">
            {/* title */}
            <div className="flex justify-between">
              <h6 className="text-lg font-normal">Evaluation Matric</h6>
              <MdArrowOutward className="text-xl text-zinc-900" />
            </div>
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
          {/* section for Performance Statics */}
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

<CardPerform
                bg="bg-red-400"
                grade="40"
                text="Quality of Work"
              />
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



// last card of page








