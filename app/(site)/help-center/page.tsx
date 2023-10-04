import React from "react";
import { helpCenterOptions } from "./constants";
import Card from "./components/Card";
import Contact from "../components/Contact";

export default function HelpCenter() {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
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
