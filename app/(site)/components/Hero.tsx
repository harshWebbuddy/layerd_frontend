import { heroTools } from "@/utils/constants/objects";
import React from "react";
import HeroButton from "./HeroButton";
import AccessButton from "./AccessButton";

export default function Hero() {
	return (
		<div className="mt-40 sm:mt-[10%] h-fit max-w-[1500px] mx-auto px-2 sm:px-4 min-h-[70vh] max-h-[75vh]">
			<div className="flex flex-col gap-4 items-start sm:items-center">
				<h1 className="text-4xl text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text flex gap-2">
					Empowering
				</h1>
				<h1 className="capitalize text-4xl text-gray-200">
					Everything, Everyone with AI
				</h1>
				<AccessButton />
			</div>

			<div className="hidden xl:flex justify-center mt-[10%] gap-3 h-[60vh] relative z-10">
				{heroTools.map((item, index) => {
					const angle = index * (180 / (heroTools.length - 1)) - 90;
					return <HeroButton angle={angle} index={index} item={item} />;
				})}
			</div>
			<div className="header-images hidden md:block">
				{Array(4)
					.fill(null)
					.map((_, index) => (
						<img src={`animated/assets-${index + 1}.png`} className={`header-img-${index + 1} relative z-0`} draggable={false}/>
					))}
			
			</div>
			<div className="bg-gradient from-transparent to-[#1E1E26]" />
		</div>
	);
}
