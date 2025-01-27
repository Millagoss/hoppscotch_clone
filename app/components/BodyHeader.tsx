import {
  IconChevronDown,
  IconEye,
  IconPlus,
  IconStack2,
  IconX,
} from "@tabler/icons-react";
import React from "react";

export const BodyHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="gap-3 pl-4 w-[180px] bg-[#181818] flex items-center py-3 border-t-2 border-t-indigo-500">
          <p className="text-green-600 text-[10px]">GET</p>
          <p className="text-sm ">Untitled</p>
          <p className="w-full flex pr-3 justify-end">
            <IconX className="size-3" />
          </p>
        </div>
        <IconPlus className="size-4 cursor-pointer text-gray-300" />
      </div>

      {/* dropdown */}
      <div className="flex items-center gap-3 pr-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn font-semibold text-xs "
          >
            <IconStack2 className="size-4" />
            Select Environment
            <IconChevronDown className="size-4" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content text-gray-300 menu bg-base-100 rounded-box right-2 h-20 z-[1] w-80 px-2 shadow"
          >
            <li>
              <a>Envitonment Variables</a>
            </li>
          </ul>
        </div>
        <IconEye className="size-5 cursor-pointer text-gray-400" />
      </div>
    </div>
  );
};
