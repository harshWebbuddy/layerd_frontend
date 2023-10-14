"use client";

import useSidebar from "@/hooks/useSidebar";
import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";

export default function Menu() {
	const { isExpanded, setIsExpanded } = useSidebar();
  
	return (
		<button onClick={() => setIsExpanded((prev) => !prev)} className="block sm:hidden">
			<Image
				src="/main/menu.svg"
				alt="menu"
				width={30}
				height={30}
				className=""
			/>
		</button>
	);
}
