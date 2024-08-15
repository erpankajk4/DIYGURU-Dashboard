import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiBook2Line } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";

export default function UpcomingTasks({ data }: any) {
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