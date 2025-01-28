"use client";

import React, { useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { BodyNavbar } from "./BodyNavbar";
import { Parameters } from "./body-section/Parameters";
import { BodySection } from "./body-section/Body";
import { Headers } from "./body-section/Headers";
import { Authorization } from "./body-section/Authorization";
import { Sidebar } from "./Sidebar";
import { RightSectionWrapper } from "./right-section/Wrapper";

const headers = [
  { label: "Parameters", value: "parameters" },
  { label: "Body", value: "body" },
  { label: "Headers", value: "headers" },
  { label: "Authorization", value: "authorization" },
  { label: "Pre-request Script", value: "pre-request" },
  { label: "Tests", value: "tests" },
];

export const Body = () => {
  const [activeTab, setActiveTab] = useState(headers[0].value);

  const getBodyContent = () => {
    switch (activeTab) {
      case "parameters":
        return <Parameters />;
      case "body":
        return <BodySection />;
      case "headers":
        return <Headers />;
      case "authorization":
        return <Authorization />;
      case "pre-request":
        return <p>pre-request</p>;
      case "tests":
        return <p>tests</p>;

      default:
        return <Parameters />;
    }
  };

  return (
    <div className="flex h-full w-full">
      <div className="w-8/12">
        <div className="bg-foreground">
          <BodyHeader />
        </div>
        <div>
          <BodyNavbar
            activeTab={activeTab}
            headers={headers}
            setActiveTab={setActiveTab}
          />
          {getBodyContent()}
        </div>
      </div>
      <div className="w-4/12">
        <RightSectionWrapper />
      </div>
    </div>
  );
};
