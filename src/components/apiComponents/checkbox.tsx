"use client";
import { useState } from "react";

export default function CustomCheckbox({
  name,
  checkboxName,
}: {
  name: string;
  checkboxName: string;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex gap-3 items-center">
      <label
        className={`inline-flex items-center  rounded-md cursor-pointer space-x-2 transition-colors ${
          checked ? "bg-[#9F58EC] text-white" : "bg-[#1A0F2E]"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          name={checkboxName}
          onChange={() => setChecked(!checked)}
        />
        <div
          className={`w-4 h-4 rounded  flex items-center justify-center transition-all ${
            checked ? "bg-[#9F58EC]" : "border bg-white border-white/50"
          }`}
        >
          {checked && (
            <svg
              className={`w-3 h-3 ${checked ? "text-white" : "text-black"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>
      <span className="text-sm font-medium w-full whitespace-nowrap text-white">
        {name}
      </span>
    </div>
  );
}
