"use client";

import Image from "next/image";
import React, { useState } from "react";
import SideNavItem from "./SideNavComponent";
import clsx from "clsx";

export default function Sidebar() {
	const [isExpanded, setIsExpanded] = useState(false);
	const toggleExpanded = () => {
		setIsExpanded(prev => !prev)
	}
	return (
		<div
			className={clsx(
				"w-1/5 max-w-[300px] bg-[#1D1D1D] h-full min-h-screen sticky top-0 border-right-gradient p-4 overscroll-y-auto overflow-y-auto transition duration-300 hidden xl:block",
				!isExpanded && 'max-w-[100px]'
			)}>
			<div className="flex justify-between items-center">
				<Image
					src="/logo.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className={clsx(" w-32 block", !isExpanded && 'hidden')}
				/>
				<div className="p-1 w-fit hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition duration-200" onClick={toggleExpanded}>
					<Image
						src="/main/sidebar-left.svg"
						alt="logo"
						width={200}
						height={100}
						draggable={false}
						className="w-6"
					/>
				</div>
			</div>
			<SideNavItem />
		</div>
	);
}
