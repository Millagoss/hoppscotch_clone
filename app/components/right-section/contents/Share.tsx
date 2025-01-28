import {
  IconDots,
  IconFolderDown,
  IconPlus,
  IconQuestionMark,
  IconWorld,
  IconWorldWww,
} from "@tabler/icons-react";
import React from "react";

export const Share = () => {
  return (
    <div className="w-full">
      <div className="breadcrumbs border-b border-border px-3 text-gray-400 text-[10px]">
        <ul>
          <li>
            <p>Personal workspace</p>
          </li>
          <li>
            <p>Shared Requests</p>
          </li>
        </ul>
      </div>

      <div className="border-b py-2 flex justify-between items-center border-border px-3 text-gray-400 text-[10px]">
        <div className="flex gap-2 items-center cursor-pointer hover:text-gray-200">
          <IconPlus className="size-4" />
          <p className="leading-none">New</p>
        </div>
        <div data-tip="hello" className="flex gap-2 items-center pr-2 tooltip">
          <IconQuestionMark className="size-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
