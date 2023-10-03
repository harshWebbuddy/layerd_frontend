"use client";

import React from "react";
import { TablistData } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export default function Tablist() {
	const pathname = usePathname();

	return (
		<div className="w-full max-w-[280px] max-h-fit bg-gradient-to-b from-white/[0.01] to-white/20 p-[3px] rounded-2xl">
			<div className="w-full flex flex-col bg-gradient-to-b from-[#18181a] to-[#242229] rounded-xl">
				{TablistData.map((tab, index) => (
					<Link
						href={tab.link}
						key={index}
						className={`p-4 font-bold relative`}>
						{tab.link === pathname && (
							<motion.span
								layoutId="underline"
								className="absolute bg-gradient-to-tr from-red-950  to-red-500/20 inset-0 bg-center bg-cover rounded-xl"
							/>
						)}
						<div className=" flex gap-2 relative z-10">
							<span>{index + 1}.</span>
							<span>{tab.title}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
