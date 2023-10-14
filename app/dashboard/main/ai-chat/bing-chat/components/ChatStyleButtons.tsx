"use client";

import clsx from "clsx";
import React, { useState } from "react";
export default function ChatStyleButtons() {
	const buttons = ["Creative", "Balanced", "Precise"];
	const [selectedStyle, setSelectedStyle] = useState<string>("Balanced");

	return (
		<div className="bg-[#323232]/60 ring-2 ring-[#514E4E]/70 rounded-lg w-fit p-1 gap-2 flex">
			{buttons.map((button, index) => (
				<button
					key={index}
					className={clsx(
						"flex flex-col items-center py-1 px-8 rounded-lg",
						selectedStyle === button && "bg-gradient-to-br from-primary-red to-primary-yellow "
					)}
					onClick={() => setSelectedStyle(button)}>
					<span className={`text-xs text-primary-yellow ${selectedStyle === button && 'text-white'}`}>More</span>
					<span>{button}</span>
				</button>
			))}
		</div>
	);
}
