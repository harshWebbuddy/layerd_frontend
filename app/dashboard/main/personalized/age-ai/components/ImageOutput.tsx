"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ImageOutput() {
	const [viewOriginal, setViewOriginal] = useState(false);
	return (
		<div className="relative w-fit">
			<Image
				src={
					viewOriginal ? "/main/ai/age-original.png" : "/main/ai/age-output.gif"
				}
				alt="output image"
				height={720}
				width={660}
				className="rounded-xl w-[650px] h-[600px] relative z-[1] object-cover"
			/>
			<button
				onClick={() => setViewOriginal((prev) => !prev)}
				className="py-2 px-4 rounded-md bg-primary-red text-white absolute top-4 right-4  z-[2]">
				{viewOriginal ? "View Result" : "View Original"}
			</button>
			<div className="w-[200px] h-[238px] bg-[#FFB076] blur-[150px] absolute bottom-0 right-20 z-0" />
		</div>
	);
}
