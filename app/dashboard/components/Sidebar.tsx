"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SideNavItem from "./SideNavItem";
import clsx from "clsx";
import { useExpandedState } from "@/hooks/useExpandedState";
import { TooltipComponent } from "../main/components/Tooltip";

export default function Sidebar() {
	const { isExpanded, expand, collapse, toggle } = useExpandedState();
	const resizeListener = () => {
		if (typeof window !== "undefined" && window.innerWidth < 1024) {
			collapse();
		}
	};

	// Add a resize event listener
	useEffect(() => {
		window.addEventListener("resize", resizeListener);
		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return (
		<div>
			<TooltipComponent
				tooltipContent={isExpanded ? "Close sidebar" : "Open sidebar"}>
				<div
					className={clsx(
						"p-1 w-[35px] h-[35px] place-content-center absolute top-0 m-4 hover:bg-[#4d4d4d]/50 rounded-lg cursor-pointer transition-all duration-500 grid z-20"
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
			</TooltipComponent>
			<div className="w-fit min-h-screen top-0">
				<div
					className={clsx(
						"box-border bg-[#1D1D1D] min-h-screen h-full border-right-gradient overscroll-y-auto overflow-y-auto transition-all ease-in-out duration-500 w-[300px] absolute lg:relative z-[9999999999999999]",
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
							<TooltipComponent
								tooltipContent={isExpanded ? "Close sidebar" : "Open sidebar"}>
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
							</TooltipComponent>
						</div>
						<SideNavItem />
					</div>
				</div>
			</div>
		</div>
	);
}
