"use client";

import React, { useState } from "react";
import Selection from "../../../components/Selection";

export default function Form() {
	const [selectedSelection, setSelectedSelection] = useState<string | null>(
		null
	);
	const roomTypes = [
		{
			value: "Living room",
			label: "Living room",
		},
		{
			value: "Bed room",
			label: "Bed room",
		},
		{
			value: "Kitchen",
			label: "Kitchen",
		},
		{
			value: "Diner",
			label: "Diner",
		},
	];
	const roomModels = [
		{
			value: "Interior Design (more creative, fast)",
			label: "Interior Design (more creative, fast)",
		},
		{
			value: "Modern Marvel Oasis",
			label: "Modern Marvel Oasis",
		},
		{
			value: "Cozy Nordic Retreat",
			label: "Cozy Nordic Retreat",
		},
		{
			value: "Vintage Eclectic Sanctuary",
			label: "Vintage Eclectic Sanctuary",
		},
		{
			value: "Tropical Paradise Hideaway",
			label: "Tropical Paradise Hideaway",
		},
		{
			value: "Industrial Chic Workspace",
			label: "Industrial Chic Workspace",
		},
	];
  const privacyOptions = [
    {
      value : 'public',
      label : 'Public'
    },
    {
      value : 'private',
      label : 'Private'
    }
  ]
	return (
		<div className="w-full flex items-center gap-2 !mt-20">
			<div className="space-y-3 w-full">
				<label
					htmlFor="style"
					className="block leading-6 capitalize">
					Style
				</label>
				<div
					onClick={() => setSelectedSelection("style")}
					className={`transition ${
						selectedSelection == "style" && "border-gradient"
					}`}>
					<Selection
						id="style"
						items={roomModels}
						placeholder="Select room type"
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label
					htmlFor="renders"
					className="block leading-6 capitalize">
					Number Of Renders
				</label>
				<div
					onClick={() => setSelectedSelection("renders")}
					className={`transition ${
						selectedSelection == "renders" && "border-gradient"
					}`}>
					<Selection
						id="renders"
						items={roomModels}
						placeholder="Select room type"
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label
					htmlFor="resolution"
					className="block leading-6 capitalize">
					Resolution
				</label>
				<div
					onClick={() => setSelectedSelection("resolution")}
					className={`transition ${
						selectedSelection == "resolution" && "border-gradient"
					}`}>
					<Selection
						id="resolution"
						items={roomModels}
						placeholder="Select room type"
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label
					htmlFor="privacy"
					className="block leading-6 capitalize">
					Privacy
				</label>
				<div
					onClick={() => setSelectedSelection("privacy")}
					className={`transition ${
						selectedSelection == "privacy" && "border-gradient"
					}`}>
					<Selection
						id="privacy"
						items={privacyOptions}
						placeholder="Select room type"
					/>
				</div>
			</div>
		</div>
	);
}
