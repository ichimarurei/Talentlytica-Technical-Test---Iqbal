/* eslint-disable react/no-unescaped-entities */

"use client";

import { useEffect, useState } from "react";

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];

interface JsonObject {
  [key: string]: JsonValue;
}

const JSONViewer = ({ data }: { data: JsonValue }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderValue = (value: JsonValue): React.ReactNode => {
    if (value === null) {
      return <span className="text-red-500 dark:text-red-400">null</span>;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        return (
          <div className="flex flex-col">
            <span className="text-purple-600 dark:text-purple-400">[</span>
            <div className="pl-2 border-gray-200 dark:border-gray-600">
              {value.map((item, index) => (
                <div key={index} className="flex">
                  {renderValue(item)}
                  {index < value.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
            <span className="text-purple-600 dark:text-purple-400">]</span>
          </div>
        );
      }
      return (
        <div className="flex flex-col">
          <span className="text-purple-600 dark:text-purple-400">{"{"}</span>
          <div className="pl-2 border-gray-200 dark:border-gray-600">
            {Object.entries(value).map(([key, val], index, arr) => (
              <div key={key} className="flex gap-2">
                <span className="text-purple-600 dark:text-purple-400">
                  "{key}":
                </span>
                <div className="flex-1">
                  {renderValue(val)}
                  {index < arr.length - 1 && <span>,</span>}
                </div>
              </div>
            ))}
          </div>
          <span className="text-purple-600 dark:text-purple-400">{"}"}</span>
        </div>
      );
    }

    switch (typeof value) {
      case "string":
        return (
          <span className="text-green-600 dark:text-green-400">"{value}"</span>
        );
      case "number":
        return (
          <span className="text-blue-600 dark:text-blue-400">{value}</span>
        );
      case "boolean":
        return (
          <span className="text-yellow-600 dark:text-yellow-500">
            {value.toString()}
          </span>
        );
      default:
        return <span>{JSON.stringify(value)}</span>;
    }
  };

  if (!isMounted) return null;

  return (
    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm font-mono transition-colors duration-300">
      {renderValue(data)}
    </div>
  );
};

export default JSONViewer;
