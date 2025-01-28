"use client";

import {
  IconChevronDown,
  IconDeviceFloppy,
  IconEye,
  IconPlus,
  IconStack2,
  IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";

const getColor = (value: string) => {
  switch (value) {
    case "GET":
      return "text-green-500";

    case "POST":
      return "text-yellow-500";

    case "PUT":
      return "text-blue-500";

    case "PATCH":
      return "text-purple-500";

    case "DELETE":
      return "text-red-500";

    default:
      return "text-gray-500";
  }
};

export const BodyHeader = () => {
  const [value, setValue] = useState("https://echo.hoppscotch.io");
  const [method, setMethod] = useState("GET");

  return (
    <div className="space-y-3 bg-background">
      <div className="w-full flex bg-foreground justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="gap-3 pl-4 w-[180px] bg-[#181818] flex items-center py-3 border-t-2 border-t-indigo-500">
            <p className={`${getColor(method)} text-[10px]`}>{method}</p>
            <p className="text-sm text-gray-300  font-semibold">Untitled</p>
            <p className="w-full cursor-pointer text-gray-300 flex pr-3 justify-end">
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
              className="text-text  border-r border-l border-border py-3 px-4 flex items-center gap-2 bg-transparent hover:text-gray-300 font-semibold text-xs "
            >
              <IconStack2 className="size-5" />
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

      <div className="pl-6 flex gap-2 mt-3 items-center">
        <div className="flex w-full rounded-md h-10 gap-2 bg-foreground ">
          <div className="dropdown w-32">
            <div
              tabIndex={0}
              role="button"
              className={`flex text-gray-200 justify-between cursor-pointer items-center px-7 h-full pl-5 bg-transparent gap-7 font-bold text-[10px]`}
            >
              {method}
              <IconChevronDown className="size-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-foreground rounded-sm z-[1] top-10 p-2 shadow"
            >
              <li onClick={() => setMethod("GET")}>
                <p className="text-green-500">GET</p>
              </li>
              <li onClick={() => setMethod("POST")}>
                <p className="text-yellow-500">POST</p>
              </li>
              <li onClick={() => setMethod("PUT")}>
                <p className="text-blue-500">PUT</p>
              </li>
              <li onClick={() => setMethod("PATCH")}>
                <p className="text-purple-500">PATCH</p>
              </li>
              <li onClick={() => setMethod("DELETE")}>
                <p className="text-red-500">DELETE</p>
              </li>
            </ul>
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            placeholder="Type here"
            className="focus:border-none text-gray-300 text-sm bg-transparent w-full max-w-xs"
          />
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer bg-indigo-500 rounded-md py-2 px-3 pl-8 text-gray-200 gap-7 font-semibold text-[12px]"
          >
            Send
            <IconChevronDown className="size-4" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content w-60 text-gray-300 menu bg-foreground rounded-sm z-[1] top-10 p-2 shadow"
          >
            <li>
              <a>Content</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer bg-foreground rounded-md py-2 px-4 pr-6 text-gray-400 gap-2 font-semibold text-[12px]"
          >
            <IconDeviceFloppy className="size-5" />
            Save
            <IconChevronDown className="size-5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content w-60 text-gray-300 menu bg-foreground rounded-sm z-[1] top-10 p-2 shadow"
          >
            <li>
              <a>Content</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
