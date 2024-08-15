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
import { courseData } from "@/data/courseManagement";
import Cardevaluate from "../reusable/Cards/evaluationcard";
import UpcomingTasks from "../reusable/upcomingTask";
import { Tag } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import CardPerform from "../reusable/Cards/PerformanceStatistic";

const today = new Date().toISOString().split('T')[0];

const formSchema = z.object({
  subjectname: z.string().min(5, "Subject name must be at least 5 characters long"),
  title: z.string().min(1, "Quiz title is required"),
  instructor: z.string().min(1, "Instructor name is required"),
  startdate: z.string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid start date",
    })
    .refine((date) => date >= today, {
      message: "Start date cannot be earlier than today",
    }),
  enddate: z.string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid end date",
    })
    .refine((date) => date >= today, {
      message: "End date cannot be earlier than today",
    }),
  description: z.string().optional(),
  content: z.string().optional(),
  uploadimage: z.any().optional(),
  uploadvideo: z.any().optional(),
});

export default function CourseManagement({ tab, setMobileMenu }: any) {
  const router = useRouter();
  function handleSearch() {
    // search operation
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectname: "",
      title: "",
      instructor: "",
      startdate: "",
      enddate: "",
      description: "",
      content: "",
      uploadimage: undefined,
      uploadvideo: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle form Values Here
    console.log(values);
    form.reset();
   
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
          {/* section 1 - Overview */}
          <h2 className="mb-3 text-xl">Available Courses</h2>
          {/* All courses card*/}
          <div className="flex overflow-x-auto">
            {courseData.data.map((course) => (
              <CourseCard
                key={course.id}
                image={course?.image?.url}
                title={course.courseName}
                detail={course.details}
                tags={course.tags || []}
              />
            ))}
          </div>

          {/* Section 3 - Add Courses  */}
          <div className="my-5 mb-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">Add New Courses</AccordionTrigger>
                <AccordionContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <Addnewtask
                        name = "subjectname"
                        label="Subject Name"
                        placeholder="Subject"
                        description="At least 5 characters."
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="title"
                        label="Course Title"
                        placeholder="Course Title"
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="instructor"
                        label="Instructor"
                        placeholder="Instructor"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask 
                        name="startdate"
                        label="Start Date"
                        placeholder="Start Date"
                        // description="At least 8 characters."
                        inputType = "date"
                        min={today} 
                        formControl={form.control}
                      />
                       <Addnewtask
                        name="enddate"
                        label="End Date"
                        placeholder="End Date"
                        // description="At least 8 characters."
                        inputType="date"
                        min={today} 
                        formControl={form.control}
                      />

<Addnewtask
                        name="description"
                        label="Course Description"
                        placeholder="Course Description"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="content"
                        label="Course Content"
                        placeholder="Course Content"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadimage"
                        label="upload Course Image"
                        placeholder="upload Course Image"
                        // description="At least 8 characters."
                        inputType = "file"
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadvideo"
                        label="Upload Course Video"
                        placeholder="Upload Course Video"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />


                      <Button className="float-right shadow-lg text-white rounded-full" type="submit">
                        Launch Course
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3" >
                        Save Draft
                      </Button>
                    </form>
                  </Form>{" "}
                </AccordionContent>
              </AccordionItem>

{/* add Assignments */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">Add New Assignment</AccordionTrigger>
                <AccordionContent>
                <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <Addnewtask
                        name = "subjectname"
                        label="Subject Name"
                        placeholder="Subject"
                        description="At least 5 characters."
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="title"
                        label="Assignment Title"
                        placeholder="Assignment Title"
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="instructor"
                        label="Instructor"
                        placeholder="Instructor"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask 
                        name="startdate"
                        label="Start Date"
                        placeholder="Start Date"
                        // description="At least 8 characters."
                        inputType = "date"
                        min={today}
                        formControl={form.control}
                      />
                       <Addnewtask
                        name="enddate"
                        label="End Date"
                        placeholder="End Date"
                        // description="At least 8 characters."
                        inputType="date"
                        min={today}
                        formControl={form.control}
                      />

<Addnewtask
                        name="description"
                        label="Assignment Description"
                        placeholder="Assignment Description"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="content"
                        label="Assignment Content"
                        placeholder="Assignment Content"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadimage"
                        label="upload Assignment Image"
                        placeholder="upload Assignment Image"
                        // description="At least 8 characters."
                        inputType = "file"
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadvideo"
                        label="Upload Assignment Video"
                        placeholder="Upload Assignment Video"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />


                      <Button className="float-right shadow-lg text-white rounded-full" type="submit">
                        Launch Course
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3" >
                        Save Draft
                      </Button>
                    </form>
                  </Form>{" "}
                </AccordionContent>
              </AccordionItem>


{/* add quizzes */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl bg-purple-300 px-3 py-1 my-5">Add New Quizzes</AccordionTrigger>
                <AccordionContent>
                <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <Addnewtask
                        name = "subjectname"
                        label="Subject Name"
                        placeholder="Subject"
                        description="At least 5 characters."
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="title"
                        label="Quiz Title"
                        placeholder="Quiz Title"
                        formControl={form.control}
                      />
                      <Addnewtask
                        name="instructor"
                        label="Instructor"
                        placeholder="Instructor"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="startdate"
                        label="Start Date"
                        placeholder="Start Date"
                        // description="At least 8 characters."
                        inputType = "date"
                        min={today}
                        formControl={form.control}
                      />
                       <Addnewtask
                        name="enddate"
                        label="End Date"
                        placeholder="End Date"
                        // description="At least 8 characters."
                        inputType="date"
                        min={today}
                        formControl={form.control}
                      />

<Addnewtask
                        name="description"
                        label="Quiz Description"
                        placeholder="Quiz Description"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="content"
                        label="Quiz Content"
                        placeholder="Quiz Content"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadimage"
                        label="upload Quiz Image"
                        placeholder="upload Quiz Image"
                        // description="At least 8 characters."
                        inputType = "file"
                        formControl={form.control}
                      />

<Addnewtask
                        name="uploadvideo"
                        label="Upload Quiz Video"
                        placeholder="Upload Quiz Video"
                        // description="At least 8 characters."
                        formControl={form.control}
                      />


                      <Button className="float-right shadow-lg text-white rounded-full" type="submit">
                        Launch Course
                      </Button>
                      <Button className="float-right shadow-lg text-foreground border-2 border-foreground hover:text-white rounded-full bg-white mr-3" >
                        Save Draft
                      </Button>
                    </form>
                  </Form>{" "}
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

interface Tag {
  id: number;
  label: string;
}

interface CourseCardProps {
  image: string | StaticImageData;
  title: string;
  detail: string;
  tags?: Tag[];
}

function CourseCard({ image, title, detail, tags = [] }: CourseCardProps) {
  return (
    <div className="flex items-center mx-2 rounded-2xl p-4 shadow-xl flex-col w-72 bg-white hover:p-[14px] hover:border-2 border-foreground mb-3">
      <div className="relative  h-64 w-64">
        <Image
          src={image}
          alt={title || "Course image"}
          fill
          className="rounded-xl object-cover"
          priority
        />
      </div>
      <h2 className="mt-3 mb-2 text-left text-2xl font-semibold text-purple-950  w-full">
        {title}
      </h2>
      <p className="font-medium text-purple-850 mb-2">{detail}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 w-full mb-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-gray-100 px-2 py-1 rounded-lg border-purple-950 border text-xs"
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      <button className="bg-foreground hover:bg-foreground/70 text-white font-medium py-2 px-4 rounded-full text-sm w-full">
        Edit
      </button>
    </div>
  );
}


interface AddnewtaskProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  min?: string;
  formControl: Control<z.infer<typeof formSchema>, any>;
}

const Addnewtask: React.FC<AddnewtaskProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,min,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-purple-950">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
              min = {min}
              className="w-full border-2 border-zinc-300"
            />
          </FormControl>
          {/* {description && <FormDescription>{description}</FormDescription>} */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
