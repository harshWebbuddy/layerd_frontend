"use client";

import Image from "next/image";
import React, { useState } from "react";
import SideNavItem from "./SideNavComponent";
import clsx from "clsx";

export default function Sidebar() {
	const [isExpanded, setIsExpanded] = useState(true);
	const toggleExpanded = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<div className="w-fit min-h-screen sticky top-0 z-20">
			<div
				className={clsx(
					"p-1 w-fit absolute top-0 m-4 z-[30] hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition-all duration-500",
					isExpanded && "opacity-0"
				)}
				onClick={toggleExpanded}>
				<Image
					src="/main/sidebar-left.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-6"
				/>
			</div>
			<div
				className={clsx(
					"w-[300px] bg-[#1D1D1D] min-h-screen h-full border-right-gradient p-4 overscroll-y-auto overflow-y-auto transition-all duration-300 hidden xl:block",
					!isExpanded && "w-[0px] !p-0"
				)}>
				<div className="flex justify-between items-center">
					<Image
						src="/logo.svg"
						alt="logo"
						width={200}
						height={100}
						draggable={false}
						className={clsx(" w-32 block", !isExpanded && "hidden")}
					/>
					<div
						className="p-1 w-fit hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition duration-200"
						onClick={toggleExpanded}>
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
		</div>
	);
}
