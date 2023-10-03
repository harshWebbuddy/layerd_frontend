import { heroTools } from "@/utils/constants/objects";
import React from "react";
import HeroButton from "./HeroButton";

export default function Hero() {
	return (
		<div className="mt-20 h-fit max-w-[1500px] h- mx-auto px-2 sm:px-4">
			<div className="flex flex-col gap-4 items-start sm:items-center">
				<h1 className="text-4xl text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text flex gap-2">
					Empowering
				</h1>
				<h1 className="capitalize text-4xl text-gray-200">
					Everything, Everyone with AI
				</h1>
				<button className="px-6 py-3.5 bg-neutral-800/50 ring-1 ring-inset ring-neutral-700 mt-5 capitalize text-sm rounded-md hover:bg-neutral-800/80 transition font-semibold">
					Get early access
				</button>
			</div>

			<div className="flex justify-center mt-56 gap-14 h-[40vh]">
				{heroTools.map((item, index) => {
					const angle = index * (180 / (heroTools.length - 2.5 )) - 120;
					return <HeroButton angle={angle} index={index} item={item} />;
				})}
			</div>
		</div>
	);
}
