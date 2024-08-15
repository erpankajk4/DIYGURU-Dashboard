"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { IoIosArrowDown, IoMdStopwatch } from "react-icons/io";
import { BsFilterLeft } from "react-icons/bs";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import { DateRangePicker } from "../ui/date-range-picker";
import { useRouter } from "next/navigation";
import Cardevaluate from "../reusable/Cards/evaluationcard";
import UpcomingTasks from "../reusable/upcomingTask";
import { Tag } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import CardPerform from "../reusable/Cards/PerformanceStatistic";

const assignmentReviewSchema = z.object({
  studentname: z.string().min(5, "Student name must be at least 5 characters"),
  assignmenttitle: z.string(),
  submissiondate: z.string(),
  grade: z.string(),
  feedback: z.string(),
});

const manualEnrollmentSchema = z.object({
  studentname: z
    .string()
    .min(5, "Student name/ID must be at least 5 characters"),
  courseselection: z.string(),
  studentimage: z.any(),
});

const bulkEnrollmentSchema = z.object({
  csvfile: z.any(),
});

export default function Marking_Review({ tab, setMobileMenu }: any) {
  const router = useRouter();
  function handleSearch() {
    // search operation
  }

  const assignmentReviewForm = useForm({
    resolver: zodResolver(assignmentReviewSchema),
    defaultValues: {
      studentname: "",
      assignmenttitle: "",
      submissiondate: "",
      grade: "",
      feedback: "",
    },
  });

  const manualEnrollmentForm = useForm({
    resolver: zodResolver(manualEnrollmentSchema),
    defaultValues: {
      studentname: "",
      courseselection: "",
      studentimage: null,
    },
  });

  const bulkEnrollmentForm = useForm({
    resolver: zodResolver(bulkEnrollmentSchema),
    defaultValues: {
      csvfile: null,
    },
  });

  const onSubmit = (values: any) => {
    console.log("Submitted Data:", values);
  };

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

          {/* Section 3 - Course Evaluation */}
          <div className="my-5 mb-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">
                  Assignment Review
                </AccordionTrigger>
                <AccordionContent>
                  <Form {...assignmentReviewForm}>
                    <form
                      onSubmit={assignmentReviewForm.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <AddNewTask
                        name="studentname"
                        label="Student Name"
                        placeholder="Student Name"
                        description="At least 5 characters."
                        formControl={assignmentReviewForm.control}
                      />
                      <AddNewTask
                        name="assignmenttitle"
                        label="Assignment Title"
                        placeholder="Assignment Title"
                        formControl={assignmentReviewForm.control}
                        description={undefined}
                      />
                      <AddNewTask
                        name="submissiondate"
                        label="Submission Date"
                        placeholder="Submission Date"
                        inputType="date"
                        formControl={assignmentReviewForm.control}
                        description={undefined}
                      />
                      <AddNewTask
                        name="grade"
                        label="Grade Input"
                        placeholder="Grade"
                        formControl={assignmentReviewForm.control}
                        description={undefined}
                      />
                      <AddNewTask
                        name="feedback"
                        label="Feedback"
                        placeholder="Feedback"
                        formControl={assignmentReviewForm.control}
                        description={undefined}
                      />
                      <Button
                        className="float-right shadow-lg text-white rounded-full"
                        type="submit"
                      >
                        Submit Review
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3">
                        Save Draft
                      </Button>
                    </form>
                  </Form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">
                  Manual Enrollment
                </AccordionTrigger>
                <AccordionContent>
                  <Form {...manualEnrollmentForm}>
                    <form
                      onSubmit={manualEnrollmentForm.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <AddNewTask
                        name="studentname"
                        label="Student Name/ID"
                        placeholder="Student Name/ID"
                        description="At least 5 characters."
                        formControl={manualEnrollmentForm.control}
                      />
                      <AddNewTask
                        name="courseselection"
                        label="Course Selection"
                        placeholder="Course Selection"
                        formControl={manualEnrollmentForm.control}
                        description={undefined}
                      />
                      <AddNewTask
                        name="studentimage"
                        label="Upload Student Image"
                        placeholder="Upload Student Image"
                        inputType="file"
                        formControl={manualEnrollmentForm.control}
                        description={undefined}
                      />
                      <Button
                        className="float-right shadow-lg text-white rounded-full"
                        type="submit"
                      >
                        Enroll
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3">
                        Save Draft
                      </Button>
                    </form>
                  </Form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">
                  Bulk Enrollment
                </AccordionTrigger>
                <AccordionContent>
                  <Form {...bulkEnrollmentForm}>
                    <form
                      onSubmit={bulkEnrollmentForm.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <AddNewTask
                        name="csvfile"
                        label="Upload CSV File"
                        placeholder="Upload CSV File"
                        inputType="file"
                        formControl={bulkEnrollmentForm.control}
                        description={undefined}
                      />
                      <Button
                        className="float-right shadow-lg text-white rounded-full"
                        type="submit"
                      >
                        Enroll
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3">
                        Save Draft
                      </Button>
                    </form>
                  </Form>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Section 4 - Manage Staff  */}
        </div>

        {/* Right Aside Section */}
        {/* card evaluate */}
        <aside className="col-span-3 flex flex-col gap-3 max-xl:col-span-12">
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

// Define AddNewTask component
const AddNewTask = ({
  name,
  label,
  placeholder,
  description,
  inputType = "text",
  formControl,
}: any) => (
  <FormField
    control={formControl}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} type={inputType} placeholder={placeholder} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);
