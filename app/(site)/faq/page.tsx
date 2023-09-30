import React from "react";
import Contact from "../components/Contact";

export default function FaqPage() {
	return (
		<div>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Frequently asked questions
					</h1>
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto">
				<Contact />
			</div>
		</div>
	);
}
