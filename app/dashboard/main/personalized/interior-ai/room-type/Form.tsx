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
	return (
		<div className="w-full space-y-10">
			<div className="space-y-3">
				<label
					htmlFor="room"
					className="block leading-6 text-white/80 capitalize">
					Room
				</label>
				<div
					onClick={() => setSelectedSelection("room-type")}
					className={`transition ${
						selectedSelection == "room-type" && "border-gradient"
					}`}>
					<Selection
						id="room"
						items={roomTypes}
						placeholder="Select room type"
					/>
				</div>
			</div>
			<div className="space-y-3">
				<label
					htmlFor="mode"
					className="block leading-6 text-white/80 capitalize">
					Mode
				</label>
				<div
					onClick={() => setSelectedSelection("room-model")}
					className={`transition ${
						selectedSelection == "room-model" && "border-gradient p-[2px]"
					}`}>
					<Selection
						id="room-mode"
						items={roomModels}
						placeholder="Select room type"
					/>
				</div>
			</div>
		</div>
	);
}
