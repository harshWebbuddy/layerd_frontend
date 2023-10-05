

import Image from "next/image";
import React from "react";

export default function StickyComponent() {
	return (
		<div className="w-full">
			<Image
				src="/landing/ai-codes.gif"
				alt="Coding Ai"
				width={900}
				height={600}
				className="rounded-xl sm:rounded-3xl shadow-2xl shadow-[#2c2c2c]"
			/>
		</div>
	);
}
