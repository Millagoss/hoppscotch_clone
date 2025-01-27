"use client";

import { IconChevronDown, IconDeviceFloppy } from "@tabler/icons-react";
import React, { useState } from "react";

export const SubHeader = () => {
  const [value, setValue] = useState("https://echo.hoppscotch.io");

  return (
    <div className="pl-8 flex gap-2 mt-4 items-center">
      <div className="flex w-full h-10 gap-2 bg-foreground ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer  p-3 pl-8 text-gray-200 bg-transparent gap-7 font-semibold text-[10px]"
          >
            GET
            <IconChevronDown className="size-4" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-foreground rounded-sm z-[1] top-10 p-2 shadow"
          >
            <li>
              <a className="text-green-500">GET</a>
            </li>
            <li>
              <a className="text-yellow-500">POST</a>
            </li>
            <li>
              <a className="text-blue-500">PUT</a>
            </li>
            <li>
              <a className="text-purple-500">PATCH</a>
            </li>
            <li>
              <a className="text-red-500">DELETE</a>
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
      <div className="dropdown ">
        <div
          tabIndex={0}
          role="button"
          className="flex cursor-pointer bg-indigo-500 rounded-md py-2 px-3 pl-8 text-gray-200 bg-transparent gap-7 font-semibold text-[12px]"
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
  );
};
