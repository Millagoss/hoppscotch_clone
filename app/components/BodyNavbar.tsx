"use client";

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  headers: {
    label: string;
    value: string;
  }[];
};

export const BodyNavbar = ({ headers, activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex py-3 px-4 gap-6">
        {headers.map((h) => {
          return (
            <div
              key={h.value}
              onClick={() => setActiveTab(h.value)}
              className={`h-9 px-1 py-3 text-gray-400 text-xs hover:text-gray-200 font-semibold cursor-pointer ${
                activeTab === h.value &&
                "border-b-indigo-500 text-gray-200 border-b-2"
              } `}
            >
              <p className={`${activeTab === h.value && "text-gray-200"} `}>
                {h.label}
              </p>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => setActiveTab("variables")}
        className={`h-9 px-1 py-3 text-gray-400 text-xs hover:text-gray-200 font-semibold cursor-pointer ${
          activeTab === "variables" &&
          "border-b-indigo-500 text-gray-200 border-b-2"
        } `}
      >
        <p className={`pr-3 ${activeTab === "variables" && "text-gray-200"} `}>
          Variables
        </p>
      </div>
    </div>
  );
};
