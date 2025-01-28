import {
  IconDots,
  IconFolderDown,
  IconPlus,
  IconQuestionMark,
  IconWorld,
  IconWorldWww,
} from "@tabler/icons-react";
import React from "react";

export const Stacks = () => {
  return (
    <div className="w-full">
      <div className="breadcrumbs border-b border-border px-3 text-gray-400 text-[10px]">
        <ul>
          <li>
            <p>Personal workspace</p>
          </li>
          <li>
            <p>Environments</p>
          </li>
        </ul>
      </div>

      <div className="h-10 border-b border-border items-center flex justify-between w-full px-3 text-gray-400 text-sm">
        <div className="flex items-center font-semibold transition-all hover:text-gray-200 cursor-pointer text-xs gap-2">
          <IconWorld className="size-5" /> Global
        </div>
        <IconDots className="size-4 rotate-90 cursor-pointer" />
      </div>

      <div className="border-b py-2 flex justify-between items-center border-border px-3 text-gray-400 text-[10px]">
        <div className="flex gap-2 items-center">
          <IconPlus className="size-4" />
          <p className="leading-none">New</p>
        </div>
        <div className="flex gap-2 items-center">
          <IconQuestionMark className="size-4" />
          <IconFolderDown className="size-4" />
        </div>
      </div>
    </div>
  );
};
