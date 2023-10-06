import React from "react";
import { helpCenterOptions } from "./constants";
import Card from "./components/Card";
import Contact from "../components/Contact";

export default function HelpCenter() {
	return (
		<main>
			<div className="w-full h-[50vh] relative">
				<div className="bg-[#0a0a0e]/90 absolute inset-0 z-[-1]" />
				<video
					className="w-full h-full absolute inset-0 object-cover z-[-2]"
					loop={true}
					autoPlay={true}>
					<source
						src="/video/-1af2-4fbf-b389-3d379703d080.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="bg-gradient-to-b from-transparent to-[#16161b] h-40 absolute bottom-0 w-full z-1" />
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Help Center
					</h1>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto p-3 sm:p-4">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
					{helpCenterOptions.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</div>
				<Contact />
			</div>
		</main>
	);
}
