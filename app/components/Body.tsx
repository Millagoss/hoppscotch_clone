import React from "react";
import { BodyHeader } from "./BodyHeader";
import { BodyNavbar } from "./BodyNavbar";

export const Body = () => {
  return (
    <div className="w-full border-r border-gray-950">
      <div className="w-4/6 bg-[#1c1c1e]">
        <BodyHeader />
      </div>
      <div className="w-4/6 ">
        <BodyNavbar />
      </div>
    </div>
  );
};
