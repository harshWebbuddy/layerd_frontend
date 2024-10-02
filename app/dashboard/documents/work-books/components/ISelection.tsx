"use client";

import Selection from "@/app/dashboard/account/me/components/Selection";
import React from "react";

export default function ISelection() {
  const selectionItems = [
    {
      value: "Workbook 1",
      label: "Workbook 1",
    },
    {
      value: "Workbook 2",
      label: "Workbook 2",
    },
    {
      value: "Workbook 3",
      label: "Workbook 3",
    },
    {
      value: "Workbook 4",
      label: "Workbook 4",
    },
    {
      value: "Workbook 5",
      label: "Workbook 5",
    },
    {
      value: "Workbook 6",
      label: "Workbook 6",
    },
  ];
  return (
    <div className="w-full max-w-6xl">
      <Selection
        items={selectionItems}
        label="Select Workbook Name"
        placeholder="Select"
      />
    </div>
  );
}
