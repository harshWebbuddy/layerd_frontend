"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function SelectInterviewer() {
	const [selectedInterviewer, setSelectedInterviewer] = useState<string | null>(null);
	const interviewers = [
		{
			name: "Jhon",
			profession: "Software Engineering",
		},
		{
			name: "Richard",
			profession: "Product Management",
		},
		{
			name: "Sarah",
			profession: "Other",
		},
	];
	return (
		<div className="space-y-4">
			{interviewers.map((person, index) => (
				<div
					key={index}
					onClick={() => setSelectedInterviewer(person.name)}
					className={`flex justify-between items-center bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] py-4 px-8 rounded-lg cursor-pointer ${
						selectedInterviewer === person.name && "border-gradient"
					}`}>
					<div className="space-y-3">
						<h1 className="text-lg font-bold">{person.name}</h1>
						<p className="text-[#ABAEB7]">{person.profession}</p>
					</div>
					<div className="flex flex-col items-center space-y-1">
						<Image
							src="/main/ai/us-en.png"
							alt="easy"
							width={35}
							height={27}
						/>
						<p
							className={`text-sm ${
								selectedInterviewer == person.name && "text-primary-yellow"
							} `}>
							EN
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
