"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";
import { navObjects } from "../main/components/constants";
import clsx from "clsx";
import Link from "next/link";

export default function SideNavItem() {
	const [activeLink, setActiveLink] = useState<string | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="space-y-3 mt-10">
			{navObjects.map((item, index) => (
				<div
					key={index}
					onClick={() => {
						if (item.title === activeLink) {
							setIsOpen(false);
							setActiveLink(null);
						} else {
							setIsOpen(true);
							setActiveLink(item.title);
						}
					}}>
					<div
						className={clsx(
							"flex justify-between gap-4 hover:bg-[#323232] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer p-2 items-center transition duration-200 h-[52px]",
							activeLink == item.title && "bg-[#272727] ring-1"
						)}>
						<div className="flex items-center gap-3">
							<div
								className={`${
									activeLink == item.title && `bg-custom-${index} rounded-full `
								} p-1.5 transition duration-300`}>
								<Image
									src={item.icon}
									alt="Icon"
									width={200}
									height={100}
									draggable={false}
									className="w-6"
								/>
							</div>
							<p>{item.title}</p>
						</div>
						{item.items?.length && (
							<div
								className={`rotate-180 transition duration-300 pr-2 ${
									isOpen && activeLink === item.title && "rotate-0"
								}`}>
								<Image
									src="/main/arrow-up.svg"
									alt="Icon"
									width={200}
									height={100}
									draggable={false}
									className="w-4"
								/>
							</div>
						)}
					</div>
					<Collapse isOpened={item.title === activeLink && isOpen}>
						<div
							className="ml-10 mt-4 mb-10 flex flex-col gap-6"
							onClick={(e) => e.stopPropagation()}>
							{item.items?.map((item) => (
								<Link
									href={item.link}
									className="flex justify-between pr-4 cursor-pointer">
									<p>{item.title}</p>
									<Image
										src={item.icon}
										alt="Icon"
										width={200}
										height={100}
										draggable={false}
										className="w-7"
									/>
								</Link>
							))}
						</div>
					</Collapse>
				</div>
			))}
		</div>
	);
}
