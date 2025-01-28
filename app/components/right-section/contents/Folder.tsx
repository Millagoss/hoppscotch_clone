import {
  IconFolderDown,
  IconPlus,
  IconQuestionMark,
} from "@tabler/icons-react";
import React from "react";

export const Folder = () => {
  return (
    <div className="w-full">
      <div className="breadcrumbs border-b border-border px-3 text-gray-400 text-[10px]">
        <ul>
          <li>
            <p>Personal workspace</p>
          </li>
          <li>
            <p>Collections</p>
          </li>
        </ul>
      </div>

      <input
        className="h-10 border-b border-border focus:outline-none bg-transparent w-full px-3 text-gray-400 text-sm"
        type="text"
        name=""
        placeholder="search"
        id=""
      />

      <div className="border-b py-2 flex justify-between items-center border-border px-3 text-gray-400 text-[10px]">
        <div className="flex gap-2 items-center">
          <IconPlus className="size-4" />
          <p className="leading-none">New</p>
        </div>
        <div className="flex gap-2 items-center">
          <IconQuestionMark className="size-4" />
          <IconFolderDown className="size-4" />
        </div>
      </div>
    </div>
  );
};
