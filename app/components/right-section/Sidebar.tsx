"use client";

import React, { useState } from "react";

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  tabs: {
    value: string;
    label: React.JSX.Element;
  }[];
};

export const RightSectionSidebar = ({
  tabs,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <div className="space-y-1 border-r border-l border-border h-full">
      {tabs.map((h) => {
        return (
          <div
            key={h.value}
            onClick={() => setActiveTab(h.value)}
            className={`h-11 p-3 text-gray-500 cursor-pointer ${
              activeTab === h.value && "text-indigo-500"
            } `}
          >
            {h.label}
          </div>
        );
      })}
    </div>
  );
};
