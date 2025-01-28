"use client";

import React, { useState } from "react";
import { BodyHeader } from "./BodyHeader";
import { BodyNavbar } from "./BodyNavbar";
import { Parameters } from "./BodyContents/Parameters";
import { BodySection } from "./BodyContents/Body";
import { Headers } from "./BodyContents/Headers";
import { Authorization } from "./BodyContents/Authorization";

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
    <div className="w-full border-r">
      <div className="w-4/6 bg-foreground">
        <BodyHeader />
      </div>
      <div className="w-4/6 ">
        <BodyNavbar
          activeTab={activeTab}
          headers={headers}
          setActiveTab={setActiveTab}
        />
        {getBodyContent()}
      </div>
    </div>
  );
};
