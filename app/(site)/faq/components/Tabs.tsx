import Image from "next/image";
import React, { useRef, useState } from "react";

interface Props {
	activeTab: string;
	setActiveTab: (value: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: Props) {
	const tabs = [
		"Search Engine",
		"AI Chatbots",
		"AI Writing",
		"AI Code",
		"AI Voice",
		"Personalized AI",
		"AI Images",
		"Create Your Own GPT",
	];
	const rowRef = useRef<HTMLDivElement>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = (dir: "left" | "right") => {
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
		<div className="bg-[#292929] rounded-xl max-w-5xl mx-auto">
			<div className="group relative">
				<div
					ref={rowRef}
					className="flex gap-1.5 p-1.5 overflow-x-scroll scrollbar-hide"
					style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}>
					{tabs.map((tab) => (
						<div
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`py-3 px-7 bg-[#363636] hover:bg-[#333333] cursor-pointer transition ${
								activeTab === tab ? "!bg-primary-red" : ""
							} rounded-md`}>
							<span className="whitespace-nowrap">{tab}</span>
						</div>
					))}
				</div>
				{isScrolled && (
					<button
						onClick={() => handleScroll("left")}
						className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 rounded-full z-10">
						<Image
							src="/svgs/chevron-left.svg"
							alt="chevron-left"
							width={25}
							height={25}
						/>
					</button>
				)}
				<button
					onClick={() => handleScroll("right")}
					className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 rounded-full z-10">
					<Image
						src="/svgs/chevron-right.svg"
						alt="chevron-left"
						width={25}
						height={25}
					/>{" "}
				</button>
			</div>
		</div>
	);
}
