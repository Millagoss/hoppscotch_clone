"use client";

import {
  IconClock,
  IconCode,
  IconFolder,
  IconShare,
  IconStack2,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { RightSectionSidebar } from "./Sidebar";
import { Folder } from "./contents/Folder";
import { Stacks } from "./contents/Stacks";
import { TimeLine } from "./contents/TimeLine";
import { Share } from "./contents/Share";
import { CodeEditor } from "./contents/CodeEditor";

const getBodyContent = (activeTab: string) => {
  switch (activeTab) {
    case "folder":
      return <Folder />;
    case "stack":
      return <Stacks />;
    case "clock":
      return <TimeLine />;
    case "share":
      return <Share />;
    case "code":
      return <CodeEditor />;

    default:
      return <Folder />;
  }
};

export const RightSectionWrapper = () => {
  const [activeTab, setActiveTab] = useState("folder");

  const tabs = [
    {
      value: "folder",
      label: (
        <IconFolder
          className={`size-5 ${activeTab === "link" && " text-indigo-500"} `}
        />
      ),
    },
    {
      value: "stack",
      label: (
        <IconStack2
          className={`size-5 ${activeTab === "graphql" && " text-indigo-300"} `}
        />
      ),
    },
    {
      value: "clock",
      label: (
        <IconClock
          className={`size-5 ${activeTab === "www" && " text-indigo-500"} `}
        />
      ),
    },
    {
      value: "share",
      label: (
        <IconShare
          className={`size-5 ${activeTab === "setting" && " text-indigo-500"} `}
        />
      ),
    },
    {
      value: "code",
      label: (
        <IconCode
          className={`size-5 ${activeTab === "setting" && " text-indigo-500"} `}
        />
      ),
    },
  ];

  return (
    <div className="w-full flex h-full">
      <div>
        <RightSectionSidebar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="w-full">{getBodyContent(activeTab)}</div>
    </div>
  );
};
