"use client";

import {
  IconBrandGraphql,
  IconLink,
  IconSettings,
  IconWorld,
} from "@tabler/icons-react";
import React, { useState } from "react";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("link");

  return (
    <div className="gap-2 flex flex-col border-r border-border h-full tabs-bordered">
      <a
        onClick={() => setActiveTab("link")}
        className={`h-11 p-3 text-gray-500 hover:bg-hover cursor-pointer ${
          activeTab === "link" && "border-l-indigo-500 border-l-2"
        } `}
      >
        <IconLink
          className={`size-5 ${activeTab === "link" && " text-gray-300"} `}
        />
      </a>
      <div
        onClick={() => setActiveTab("graphql")}
        className={`h-11 p-3 text-gray-500 hover:bg-hover cursor-pointer ${
          activeTab === "graphql" && "border-l-indigo-500 border-l-2"
        } `}
      >
        <IconBrandGraphql
          className={`size-5 ${activeTab === "graphql" && " text-gray-300"} `}
        />
      </div>
      <div
        onClick={() => setActiveTab("www")}
        className={`h-11 p-3 hover:bg-hover text-gray-500  ${
          activeTab === "www" && "border-l-indigo-500 border-l-2"
        } `}
      >
        <IconWorld
          className={`size-5 ${activeTab === "www" && " text-gray-300"} `}
        />
      </div>
      <div
        onClick={() => setActiveTab("setting")}
        className={`h-11 p-3 hover:bg-hover text-gray-500  ${
          activeTab === "setting" && "border-l-indigo-500 border-l-2"
        } `}
      >
        <IconSettings
          className={`size-5 ${activeTab === "setting" && " text-gray-300"} `}
        />
      </div>
    </div>
  );
};
