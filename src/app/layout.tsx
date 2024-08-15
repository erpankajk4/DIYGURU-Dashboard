import type { Metadata } from "next";
import  "@/styles/globals.css";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "DIY Guru",
  description: "DIY Guru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-gradient-to-tr from-purple-200 from-10% via-white  to-purple-200  antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
