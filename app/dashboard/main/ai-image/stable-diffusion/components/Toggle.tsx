"use client";

import React from "react";

interface ToggleButtonProps {
  label: string;
}

export default function ToggleButton({ label }: ToggleButtonProps) {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setIsEnabled(!isEnabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isEnabled
            ? "bg-gradient-to-br from-primary-red to-primary-yellow"
            : "bg-[#3F3F46]"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isEnabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className="text-sm font-medium text-gray-200">{label}</span>
    </div>
  );
}
