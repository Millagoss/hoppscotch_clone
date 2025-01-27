import {
  IconChevronDown,
  IconDots,
  IconEye,
  IconLayersDifference,
  IconPlus,
  IconStack,
  IconStack2,
  IconX,
} from "@tabler/icons-react";
import React from "react";
import { BodyHeader } from "./BodyHeader";
import { SubHeader } from "./SubHeader";

export const Body = () => {
  return (
    <div className="w-full border-r border-gray-950">
      <div className="w-4/6 bg-[#1c1c1e]">
        <BodyHeader />
      </div>
      <div className="w-4/6 ">
        <SubHeader />
      </div>
    </div>
  );
};
