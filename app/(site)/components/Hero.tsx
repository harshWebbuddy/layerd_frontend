import { heroTools } from "@/utils/constants/objects";
import React from "react";
import HeroButton from "./HeroButton";
import AccessButton from "./AccessButton";

export default function Hero() {
	return (
		<div className="mt-28 h-fit max-w-[1500px] mx-auto px-2 sm:px-4 min-h-[40vh] max-h-[70vh]">
			<div className="flex flex-col gap-4 items-start sm:items-center">
				<h1 className="text-4xl text-transparent bg-gradient-to-b from-white to-gray-500 bg-clip-text flex gap-2">
					Empowering
				</h1>
				<h1 className="capitalize text-4xl text-gray-200">
					Everything, Everyone with AI
				</h1>
				<AccessButton/>
			</div>

			<div className="hidden xl:flex justify-center mt-40 gap-3 h-[60vh]">
				{heroTools.map((item, index) => {
					const angle = index * (180 / (heroTools.length - 1 )) - 90;
					return <HeroButton angle={angle} index={index} item={item} />;
				})}
			</div>
		</div>
	);
}
