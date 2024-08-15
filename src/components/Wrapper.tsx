import React from "react";

const Wrapper = ({ children, className, isMaxWidthChangeRequired="max-w-[1440px]" }: any) => {
  return (
    <div
      className={`mx-auto w-full ${isMaxWidthChangeRequired} px-5 md:px-10 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
