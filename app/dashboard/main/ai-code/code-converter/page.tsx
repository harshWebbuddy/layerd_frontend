"use client";

import React, { useState } from "react";
import { programmingLanguages } from "../../components/constants";
import Selection from "../../components/Selection";
import clsx from "clsx";

export default function page() {
	const [selection, setSelection] = useState<string | null>(null);
	const [copied, setCopied] = useState(false);
	const handleCopyClick = () => {
		navigator.clipboard
			.writeText("Code-converter")
			.then(() => {
				setCopied(true);
			})
			.catch((error) => {
				console.error("Copy failed: ", error);
			});
	};
	if (copied) {
		setTimeout(() => setCopied(false), 1500);
	}
	return (
		<section className="px-4 md:px-10 space-y-10 relative">
			<div className="w-[132px] h-[428px] bg-[#FFB076] blur-[150px] absolute top-1/4 left-[-200px] z-[2]" />
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-3xl font-semibold">AI Code Converter</h1>
				<p className="text-[#ABAEB7]">Enter some code and click "Convert"</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-3">
				<div className="space-y-2 w-full">
					<label>Input</label>
					<div
						onClick={() => setSelection("input")}
						className={clsx(selection === "input" && "border-gradient")}>
						<Selection
							id="input"
							placeholder="Select language"
							items={programmingLanguages}
						/>
					</div>
				</div>
				<div className="space-y-2 w-full">
					<label>Output</label>
					<div
						onClick={() => setSelection("output")}
						className={clsx(selection === "output" && "border-gradient")}>
						<Selection
							id="output"
							placeholder="Select language"
							items={programmingLanguages}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col xl:flex-row gap-3">
				<div className="bg-[url('/main/background-code.png')] bg-cover bg-center bg-no-repeat min-h-[500px] w-full rounded-xl border-b-[3px] border-neutral-700">
					<div className="bg-[#393A3D] flex justify-between px-3 py-1.5  rounded-t-xl">
						<h1>1</h1>
						<div className="group relative">
							<button onClick={handleCopyClick}>Copy</button>
							<div
								className={`absolute -top-10 ${
									copied ? "-right-1" : "-right-0 sm:-right-10"
								} `}>
								<div className="bg-[#585858]/90 backdrop-blur-md p-2 rounded-md text-[13px] whitespace-nowrap z-50 invisible scale-75 transition-all duration-300 group-hover:visible group-hover:scale-100 opacity-0 group-hover:opacity-100">
									{copied ? "Copied!" : "Copy to Clipboard"}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[url('/main/background-code.png')] bg-cover bg-center bg-no-repeat min-h-[500px] w-full rounded-xl border-b-[3px] border-neutral-700">
					<div className="bg-[#393A3D] flex justify-between px-3 py-1.5  rounded-t-xl">
						<h1>1</h1>
						<div className="group relative">
							<button onClick={handleCopyClick}>Copy</button>
							<div
								className={`absolute -top-10 ${
									copied ? "-right-1" : "-right-0 sm:-right-10"
								} `}>
								<div className="bg-[#585858]/90 backdrop-blur-md p-2 rounded-md text-[13px] whitespace-nowrap z-50 invisible scale-75 transition-all duration-300 group-hover:visible group-hover:scale-100 opacity-0 group-hover:opacity-100">
									{copied ? "Copied!" : "Copy to Clipboard"}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
