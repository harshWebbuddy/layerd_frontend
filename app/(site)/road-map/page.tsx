import Image from "next/image";
import React from "react";
import { mileStones } from "./constants";
import MileStoneComponent from "./components/MileStoneComponent";
import Contact from "../components/Contact";

export default function RoadMapPage() {
	//limit to separate completed and incomplete milestones
	const doneLimit = 7;
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[35vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Roadmap
					</h1>
				</div>
			</div>
			<section className="max-w-[1400px] mx-auto mt-20 p-3 sm:p-4">
				<div>
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[1000px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Achieved milestones
						</h1>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[1000px] h-[70px] absolute right-0 -translate-y-12 hidden md:block"
						/>
					</div>
					<div className="mt-20">
						<div>
							{mileStones.slice(0, doneLimit).map((item) => (
								<MileStoneComponent {...item} isComplete={true} />
							))}
						</div>
					</div>
				</div>
				<div className="mt-20">
					<div>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[1000px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Future plans
						</h1>
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[1000px] h-[70px] absolute right-0 -translate-y-12 hidden md:block"
						/>
					</div>
					<div className="mt-20">
						<div>
							{mileStones.slice(doneLimit).map((item) => (
								<MileStoneComponent {...item} isComplete={false} />
							))}
						</div>
					</div>
				</div>
				<Contact />
			</section>
		</main>
	);
}
