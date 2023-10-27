"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Difficulty() {
	const [selectedDifficulty, setSelectedDifficulty] = useState<
		"easy" | "medium" | null
	>(null);
	return (
		<div className="space-y-6">
			<div
				onClick={() => setSelectedDifficulty("easy")}
				className={`flex justify-between items-center bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] py-4 px-8 rounded-lg cursor-pointer ${
					selectedDifficulty === "easy" && "border-gradient"
				}`}>
				<div className="space-y-3">
					<h1 className="text-lg font-bold">Behavioral</h1>
					<p className="text-[#ABAEB7]">From LinkedIn, Amazon, Adobe</p>
				</div>
				<div className="flex flex-col items-center space-y-1">
					<Image
						src="/main/ai/difficulty-easy.svg"
						alt="easy"
						width={30}
						height={30}
					/>
					<p
						className={`text-sm ${
							selectedDifficulty == "easy" && "text-primary-yellow"
						} `}>
						Easy
					</p>
				</div>
			</div>
			<div
				onClick={() => setSelectedDifficulty("medium")}
				className={`flex justify-between items-center bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] py-4 px-8 rounded-lg cursor-pointer ${
					selectedDifficulty === "medium" && "border-gradient"
				}`}>
				<div className="space-y-3">
					<h1 className="text-lg font-bold">Technical</h1>
					<p className="text-[#ABAEB7]">From Google, Meta, and Apple</p>
				</div>
				<div className="flex flex-col items-center space-y-1">
					<Image
						src="/main/ai/difficulty-medium.svg"
						alt="easy"
						width={30}
						height={30}
					/>
					<p
						className={`text-sm ${
							selectedDifficulty == "medium" && "text-primary-yellow"
						}`}>
						Medium
					</p>
				</div>
			</div>
		</div>
	);
}
