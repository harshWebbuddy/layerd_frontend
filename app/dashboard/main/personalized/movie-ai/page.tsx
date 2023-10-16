import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="h-full">
			<div className="h-full flex justify-center gap-10 items-center max-w-6xl mx-auto">
				<div className="space-y-10">
					<h1 className="capitalize mt-4 text-3xl md:text-5xl bg-gradient-to-b from-white to-primary-red !leading-[65px] font-bold text-transparent bg-clip-text max-w-[600px]">
						Get Curated Show & Movie Recommendations with{" "}
						<span className="text-primary-yellow">WhopMe</span> AI
					</h1>
					<NavigationButton
						styleClass="font-bold flex items-center gap-3 bg-[#313131] hover:bg-[#3d3d3d] py-3 px-4 rounded-lg"
						link="/dashboard/main/personalized/movie-ai/recommendations">
						<span>Get Recommendations</span>
						<Image
							src="/arrow-right.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
					</NavigationButton>
				</div>
				<div>
					<Image
						src="/main/movie-theatre-pop.png"
						alt="Arrow Right"
						draggable={false}
						width={420}
						height={420}
					/>
				</div>
			</div>
		</section>
	);
}
