"use client";
import { login, pattern1 } from "@/assets";
import useIsMobile from "@/customHooks/useIsMobile";
import LoginForm from "@/pageSections/signUpLoginSections/Login";
import Image from "next/image";
import React from "react";

export default function Login() {
  const isMobile = useIsMobile(768);
  return (
    <section className="relative h-screen grid-cols-2 sm:grid">
      <Background />
      {/* POP Up Module  */}
      <div className="grid h-max w-full grid-cols-1 rounded-2xl bg-purple-200/40 shadow-2xl backdrop-blur-sm backdrop-filter sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:grid-cols-2 sm:p-2 lg:w-[90%] xl:w-[70%]">
        <div className="col-span-1 flex w-full flex-col items-center justify-between py-3 text-purple-50 max-sm:bg-foreground sm:pb-10 sm:pt-8">
          <div className="flex items-center sm:flex-col">
            <div className="flex flex-col max-sm:p-5 max-sm:pr-0 sm:items-center">
              <h1 className="text-3xl font-extrabold text-purple-50 sm:text-5xl pb-2">
              Login
              </h1>
              <p className="mb-5 sm:text-sm text-purple-50 sm:text-center pr-2">
                Become part of our community and start {!isMobile && <br />}{" "}
                sharing your expertise today!
              </p>
            </div>
            <Image
              src={login}
              width={500}
              height={500}
              alt="login"
              className="h-32 w-32 object-contain sm:h-72 sm:w-72 pr-1"
            />
          </div>
          {/* Logo  */}
          <div className="flex items-center gap-2 max-sm:hidden">
            <div className="rounded-lg bg-purple-50 px-2 py-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="h-5 w-5 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-purple-50">
              DIYguru.org
            </span>
          </div>
        </div>
        <div className="col-span-1 flex items-center px-5 sm:pl-10 sm:pr-14">
          <LoginForm />
        </div>
        {/* Mobile Footer Logo  */}
        <div className="flex items-center justify-center gap-2 p-5 pt-0 sm:hidden">
          <div className="rounded-lg border-2 border-zinc-300 bg-purple-50 px-2 py-2 shadow-xl">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-5 w-5 object-contain"
            />
          </div>
          <span className="text-xl font-bold text-foreground">DIYguru.org</span>
        </div>
      </div>
    </section>
  );
}

const Background = () => {
  return (
    <>
      <div className="col-span-1 bg-foreground max-sm:hidden"></div>
      <div className="relative col-span-1 overflow-hidden bg-gradient-to-tr from-purple-200 from-10% via-white to-purple-200 max-sm:hidden">
        <Pattern1 className="-top-8 left-8 w-40 rotate-90" />
        <Pattern1 className="right-28 top-32 w-36 rotate-90" />
        <Pattern1 className="right-9 top-80 w-20 -rotate-12" />
        <Pattern1 className="-right-8 bottom-12 w-36 -rotate-90" />
        <Pattern1 className="bottom-11 left-28 w-56 -rotate-180" />
      </div>
    </>
  );
};

const Pattern1 = ({ className = "" }: { className: string }) => {
  return (
    <Image
      src={pattern1}
      width={400}
      height={400}
      alt="pattern"
      className={`absolute object-contain ${className}`}
    />
  );
};
