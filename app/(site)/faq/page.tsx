import React from "react";
import Contact from "../components/Contact";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import MainSection from "./components/MainSection";

export default function FaqPage() {
	return (
		<div>
			<div className=" w-full h-[50vh] relative">
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
						Frequently asked questions
					</h1>
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto p-2">
				<MainSection/>
				<Contact />
			</div>
		</div>
	);
}
