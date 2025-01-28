"use client";

import {
  IconTrash,
  IconCheck,
  IconQuestionMark,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";
import React, { useState } from "react";

type KeyValueDescription = {
  id: number;
  key: string;
  value: string;
  description: string;
}[];
const newKey = { id: 1, key: "", value: "", description: "" };
export const Table = () => {
  const [data, setData] = useState<KeyValueDescription>([newKey]);

  const handleChange = (
    index: number,
    field: "key" | "value" | "description",
    value: string
  ) => {
    setData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const handleAdd = () => {
    setData((p) => [...p, { ...newKey, id: p.length + 1 }]);
  };

  const handleDelete = (id: number) => {
    if (data.length < 2) return;
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  return (
    <>
      <div className="px-4 flex justify-between mb-1">
        <p className="text-xs text-text">Query Parameters</p>
        <div className="flex text-text gap-3 items-center">
          <IconQuestionMark title="Help" className="size-4 cursor-pointer" />
          <IconTrash
            onClick={() => setData([newKey])}
            className="size-4 cursor-pointer"
          />
          <IconEdit className="size-4 cursor-pointer" />
          <IconPlus onClick={handleAdd} className="size-4 cursor-pointer" />
        </div>
      </div>
      <div className="p-2">
        <div className="overflow-x-auto text-gray-100">
          <table className="w-full border-collapse">
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border-border border w-10"></td>
                  <td className="border-border py-1 border">
                    <input
                      type="text"
                      value={item.key}
                      placeholder="Key"
                      className="w-full px-2 text-xs border bg-transparent rounded-md focus:outline-none border-none font-semibold text-gray-300"
                      onChange={(e) =>
                        handleChange(index, "key", e.target.value)
                      }
                    />
                  </td>
                  <td className="border-border py-1 border">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item.value}
                        placeholder="Value"
                        className="w-full px-2 text-xs border bg-transparent rounded-md focus:outline-none border-none font-semibold text-gray-300"
                        onChange={(e) =>
                          handleChange(index, "value", e.target.value)
                        }
                      />
                      <div className="h-2 w-2 rounded-full" />
                    </div>
                  </td>
                  <td className="border-border py-1 border">
                    <input
                      type="text"
                      value={item.description}
                      placeholder="Description"
                      className="w-full px-2 text-xs border bg-transparent rounded-md focus:outline-none border-none font-semibold text-gray-300"
                      onChange={(e) =>
                        handleChange(index, "description", e.target.value)
                      }
                    />
                  </td>
                  <td className="p-1 border-border border">
                    <IconCheck className="text-green-400 size-4 cursor-pointer" />
                  </td>
                  <td className="border-border p-1 border text-center">
                    <IconTrash
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 size-4 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
