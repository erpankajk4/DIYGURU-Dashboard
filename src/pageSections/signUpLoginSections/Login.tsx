"use client";
import React from "react";
import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // handle form Values Here
    console.log(values);
  };

  return (
    <div className="w-full py-5 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-950 pb-2">
      Welcome Back!
      </h1>
      <p className="text-purple-950 font-medium pb-5">Login to continue to your account.</p>
      {/* External Authentication Buttons  */}
      <div className="grid grid-cols-2 gap-2 mb-2 max-2xl:grid-cols-1">
        <Button className="gap-2 rounded-lg border-2 border-zinc-200 bg-white font-medium text-black hover:bg-purple-50">
          <FcGoogle className="text-xl" />
          <span>Login with Google</span>
        </Button>
        <Button className="gap-2 rounded-lg border-2 border-zinc-200 bg-white px-0 font-medium text-black hover:bg-purple-50">
          <BiLogoFacebookCircle className="text-xl text-sky-600" />
          <span>Login with Facebook</span>
        </Button>
      </div>
      <div className="flex gap-1 justify-center items-center font-medium text-zinc-500">
        <span className="h-0 w-48 border-t border-zinc-400"></span>
        <span>or</span>
        <span className="h-0 w-48 border-t border-zinc-400"></span>
      </div>
      {/* Form  */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <LoginFormField
            name="email"
            label="Email Address"
            placeholder="name@example.com"
            inputType="email"
            formControl={form.control}
          />
          <LoginFormField
            name="password"
            label="Password"
            placeholder="********"
            // description="At least 8 characters."
            inputType="password"
            formControl={form.control}
          />
          <div className="flex space-x-2">
            <Checkbox id="terms" className="mt-1 text-white" />
            <label
              htmlFor="terms"
              className="text-sm text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By signing up, you are creating an account and you agree to
              DIYguru’s{" "}
              <Link href="#" className="text-blue-700 hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <Button className="w-full shadow-lg" type="submit">
            Create Account
          </Button>
        </form>
      </Form>
      <p className="text-zinc-900 font-medium text-sm mt-2">New User? <Link className="text-blue-700 hover:underline" href={"/signup"}>Login here</Link></p>
    </div>
  );
};

interface LoginFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<z.infer<typeof formSchema>, any>;
}

const LoginFormField: React.FC<LoginFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
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

export default LoginForm;
