"use client";

import {
  IconChevronDown,
  IconCode,
  IconDeviceFloppy,
  IconEye,
  IconFileCode,
  IconPlus,
  IconReload,
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

type TabsValue = {
  id: number;
  title: string;
  method: string;
}[];

const tabsValue = { id: 1, title: "untitled", method: "" };

export const BodyHeader = () => {
  const [value, setValue] = useState("https://echo.hoppscotch.io");
  const [method, setMethod] = useState("GET");
  const [tabs, setTabs] = useState<TabsValue>([tabsValue]);

  const handleChange = (index: number, field: "title", value: string) => {
    setTabs((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="space-y-3 bg-background">
      <div className="w-full flex bg-foreground justify-between items-center">
        <div className="flex gap-2 items-center">
          {tabs.map((t, index) => {
            return (
              <div
                key={index}
                className="gap-3 pl-4 w-[180px] bg-[#181818] flex items-center py-3 border-t-2 border-t-indigo-500"
              >
                <p className={`${getColor(method)} text-[10px]`}>{method}</p>

                <input
                  value={t.title}
                  placeholder="Untitled"
                  className="focus:outline-none text-white focus:border-none w-16"
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <p className="w-full cursor-pointer text-gray-300 flex pr-3 justify-end">
                  <IconX
                    className="size-3"
                    onClick={() => {
                      if (tabs.length < 2) return;
                      const filteredValue = tabs.filter(
                        (tab) => tab.id !== t.id
                      );
                      setTabs(filteredValue);
                    }}
                  />
                </p>
              </div>
            );
          })}
          <IconPlus
            onClick={() =>
              setTabs((p) => [...p, { ...tabsValue, id: p.length + 1 }])
            }
            className="size-4 cursor-pointer text-gray-300"
          />
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
            className="focus:outline-none focus:border-none text-gray-300 text-sm bg-transparent w-full max-w-xs"
          />
        </div>
        <div className="dropdown flex">
          <div className="flex cursor-pointer hover:bg-indigo-700 bg-indigo-500 rounded-l-md py-2 px-6 text-gray-200 gap-7 font-semibold text-[12px]">
            Send
          </div>
          <div
            tabIndex={0}
            role="button"
            className="dropdown bg-indigo-500 hover:bg-indigo-700 rounded-r-md py-2 px-2 text-gray-200"
          >
            <IconChevronDown className="size-4" />
            <ul
              tabIndex={0}
              className="dropdown-content right-2 w-40 text-gray-300 space-y-1 menu bg-foreground rounded-sm z-[1] top-10 p-2 shadow"
            >
              <div className="flex p-2 text-text hover:bg-hover rounded-md items-center gap-2">
                <IconFileCode className="size-5" /> <p>Import cURL</p>
              </div>
              <div className="flex p-2 text-text hover:bg-hover rounded-md items-center gap-2">
                <IconCode className="size-5" /> <p>Show code</p>
              </div>
              <div className="flex p-2 text-text hover:bg-hover rounded-md items-center gap-2">
                <IconReload className="size-5" /> <p>Clear all</p>
              </div>
            </ul>
          </div>
        </div>
        <div className="dropdown flex text-gray-400">
          <div className="flex cursor-pointer text-sm bg-foreground rounded-l-md px-2 gap-2 items-center">
            <IconDeviceFloppy className="size-5" />
            Save
          </div>
          <div
            tabIndex={0}
            role="button"
            className="flex hover:bg-hover cursor-pointer bg-foreground rounded-md py-2 px-2 mr-6 text-gray-400 gap-2 font-semibold text-[12px]"
          >
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
