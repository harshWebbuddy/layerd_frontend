"use client";

import Image from "next/image";
import React, { useState } from "react";
interface Props {
	textToCopy: string;
}
export default function ClipBoard({ textToCopy }: Props) {
	const [copied, setCopied] = useState(false);
	const handleCopyClick = () => {
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				setCopied(true);
			})
			.catch((error) => {
				console.error("Copy failed: ", error);
			});
	};
	if (copied) {
		setTimeout(() => setCopied(false), 2000);
	}
	return (
		<div className="group relative">
			<button
				onClick={handleCopyClick}
				className="bg-gradient-to-r from-primary-red to-primary-yellow px-3 sm:px-4 py-3 rounded-md sm:rounded-lg text-sm">
				<Image src="/main/link.svg" alt="Copy-icon" height={25} width={25} className="w-8 sm:w-auto"/>
			</button>
			<div className={`absolute -top-10 ${copied ? "-right-1" : "-right-0 sm:-right-10"} `}>
				<div className="bg-[#585858]/90 backdrop-blur-md p-2 rounded-md text-[13px] whitespace-nowrap z-50 invisible scale-75 transition-all duration-300 group-hover:visible group-hover:scale-100 opacity-0 group-hover:opacity-100">
					{copied ? "Copied!" : "Copy to Clipboard"}
				</div>
			</div>
		</div>
	);
}
