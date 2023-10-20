"use client";

import Image from "next/image";
import React, { useState } from "react";
import SideNavItem from "./SideNavItem";
import clsx from "clsx";
import { useExpandedState } from "@/hooks/useExpandedState";

export default function Sidebar() {
	const { isExpanded, expand, collapse, toggle } = useExpandedState();
	return (
		<div className="w-fit min-h-screen sticky top-0 z-20">
			<div
				className={clsx(
					"p-1 w-[35px] h-[35px] place-content-center absolute top-0 m-4 hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition-all duration-500 hidden lg:grid"
				)}
				onClick={toggle}>
				<Image
					src="/main/sidebar-left.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-7"
				/>
			</div>
			<div
				className={clsx(
					"box-border bg-[#1D1D1D] min-h-screen h-full border-right-gradient overscroll-y-auto overflow-y-auto transition-all ease-in-out duration-500 w-0 lg:w-[300px] relative z-10",
					!isExpanded && "!w-[0px] !overflow-hidden"
				)}>
				<div className="p-4">
					<div className="flex justify-between items-center">
						<Image
							src="/logo.svg"
							alt="logo"
							width={200}
							height={100}
							draggable={false}
							className={clsx(" w-32 min-w-[128px] block")}
						/>
						<div
							className="p-1 w-fit hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition duration-200"
							onClick={toggle}>
							<Image
								src="/main/sidebar-left.svg"
								alt="logo"
								width={200}
								height={100}
								draggable={false}
								className="w-7 min-w-[28px]"
							/>
						</div>
					</div>
					<SideNavItem />
				</div>
			</div>
		</div>
	);
}
