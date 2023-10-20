"use client";

import { useExpandedState } from "@/hooks/useExpandedState";
import Image from "next/image";
import React from "react";

export default function Menu() {
	const { isExpanded, expand, collapse, toggle } = useExpandedState();
	return (
		<button onClick={toggle} className="block sm:hidden">
			<Image
				src="/main/menu.svg"
				alt="menu"
				width={30}
				height={30}
				className=""
				draggable={false}
			/>
		</button>
	);
}
