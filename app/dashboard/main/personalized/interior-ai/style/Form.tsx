"use client";

import React, { useState } from "react";
import Selection from "../../../components/Selection";

export default function Form() {
	const [selectedSelection, setSelectedSelection] = useState<string | null>(
		null
	);
	const styleOptions = [
		{
			value: "Tropical",
			label: "Tropical",
		},
		{
			value: "Minimalist",
			label: "Minimalist",
		},
		{
			value: "Scandinavian",
			label: "Scandinavian",
		},
		{
			value: "Art Deco Style",
			label: "Art Deco Style",
		},
		{
			value: "Farmhouse",
			label: "Farmhouse",
		},
		{
			value: "Japanese Zen Style",
			label: "Japanese Zen Style",
		},
		{
			value: "Industrial",
			label: "Industrial",
		},
	];
	const privacyOptions = [
		{
			value: "public",
			label: "Public",
		},
		{
			value: "private",
			label: "Private",
		},
	];
	return (
		<div className="w-full flex items-center gap-2 !mt-20">
			<div className="space-y-3 w-full">
				<label htmlFor="style" className="block leading-6 capitalize">
					Style
				</label>
				<div onClick={() => setSelectedSelection("style")}>
					<Selection
						id="style"
						items={styleOptions}
						placeholder="Select room type"
						isActive={selectedSelection == "style"}
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label htmlFor="renders" className="block leading-6 capitalize">
					Number Of Renders
				</label>
				<div onClick={() => setSelectedSelection("renders")}>
					<Selection
						id="renders"
						items={[
							{
								label: "1",
								value: "1",
							},
							{
								label: "2",
								value: "2",
							},
							{
								label: "4",
								value: "4",
							},
							{
								label: "8",
								value: "8",
							},
						]}
						placeholder="Select room type"
						isActive={selectedSelection == "renders"}
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label htmlFor="resolution" className="block leading-6 capitalize">
					Resolution
				</label>
				<div onClick={() => setSelectedSelection("resolution")}>
					<Selection
						id="resolution"
						items={[
							{
								label: "Low (fas, takes 7s)",
								value: "Low",
							},
							{
								label: "Medium (fas, takes 12s)",
								value: "Medium",
							},
							{
								label: "High (fas, takes 20s)",
								value: "High",
							},
						]}
						placeholder="Select room type"
						isActive={selectedSelection == "resolution"}
					/>
				</div>
			</div>
			<div className="space-y-3 w-full">
				<label htmlFor="privacy" className="block leading-6 capitalize">
					Privacy
				</label>
				<div onClick={() => setSelectedSelection("privacy")}>
					<Selection
						id="privacy"
						items={privacyOptions}
						placeholder="Select room type"
						isActive={selectedSelection == "privacy"}
					/>
				</div>
			</div>
		</div>
	);
}
