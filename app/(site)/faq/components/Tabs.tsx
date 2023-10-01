"use client";

const tabs = [
	"Search Engine",
	"AI Chatbots",
	"AI Writing",
	"AI Code",
	"AI Voice",
	"AI Personalization",
	"AI Images",
];

import React, { useRef, useState } from "react";

export default function Tabs() {
	const [activeTab, setActiveTab] = useState("Search Engine");
	const rowRef = useRef<HTMLDivElement>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const handleClick = (dir: "left" | "right") => {
		setIsScrolled(true);
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			const scrollTo =
				dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
			if (scrollTo < 10) setIsScrolled(false);
		}
	};
	return (
		<div className="bg-[#292929] rounded-xl max-w-5xl overflow-hidden mx-auto">
			<div className="group relative">
				{/* <div
					className={`bg-slate-200/70 dark:text-white  dark:bg-primary-100/70 absolute z-10 top-0 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-slate-200 dark:hover:bg-gray-700 cursor-pointer bottom-0 h-fit rounded-full my-auto p-3 backdrop-blur ${
						!isScrolled && "hidden"
					}`}
					onClick={() => handleClick("left")}>
					L
				</div>
				<div
					className={`bg-slate-200/70 dark:text-white dark:bg-primary-100/70 absolute z-10 top-0 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-slate-200 dark:hover:bg-gray-700 cursor-pointer bottom-0 h-fit rounded-full my-auto p-3 backdrop-blur `}
					onClick={() => handleClick("right")}>
					R
				</div> */}
				<div ref={rowRef} className=" flex gap-1.5 p-1.5 ">
					{tabs.map((tab) => (
						<div
							onClick={() => setActiveTab(tab)}
							className={`py-3 px-8 bg-[#363636] hover:bg-[#333333] cursor-pointer transition ${
								activeTab == tab && "!bg-primary-red"
							} rounded-xl`}>
							<span className="whitespace-nowrap">{tab}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
