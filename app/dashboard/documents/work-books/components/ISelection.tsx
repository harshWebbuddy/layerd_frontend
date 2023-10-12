"use client";

import Selection from "@/app/dashboard/account/me/components/Selection";
import React from "react";

export default function ISelection() {
	const selectionItems = [
		{
			value: "Document Name",
			label: "Document Name",
		},
		{
			value: "Document Name",
			label: "Document Name",
		},
		{
			value: "Document Name",
			label: "Document Name",
		},
		{
			value: "Document Name",
			label: "Document Name",
		},
		{
			value: "Document Name",
			label: "Document Name",
		},
		{
			value: "Document Name",
			label: "Document Name",
		},
	];
	return (
		<div className="w-full">
			<Selection
				id="workbook-select"
				items={selectionItems}
				label="Select Workbook Name"
				placeholder="Select"
				required={false}
			/>
		</div>
	);
}
