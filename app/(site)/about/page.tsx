import React from "react";
import Reviews from "./components/Reviews";

export default function About() {
	return (
		<div>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
						<div className="w-full flex flex-col items-start md:items-center justify-center">
							<h2 className="bg-gradient-to-r text-2xl font-bold from-primary-yellow to-primary-red tracking-tight text-transparent md:text-center bg-clip-text">
								About WoopMe
							</h2>
							<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent md:text-center bg-clip-text">
								Unlocking Ai's potential, mutliple tool at a time
							</h1>
							<p className="text-sm text-gray-300 mt-6 leading-relaxed max-w-4xl md:text-center">
								We are a passionate team of AI enthusiasts, engineers, and
								innovators who are deeply committed to democratizing AI. Our
								platform is a testament to our belief in the democratization of
								technology. We understand that AI can be intimidating, but it
								doesn't have to be. We strive to simplify the AI landscape and
								make it accessible to individuals and organizations of all
								sizes.
							</p>
							<button className="bg-transparent ring-1 ring-inset ring-gray-300 py-3 w-32 rounded-xl mt-4 hover:bg-neutral-700/30 transition">
								Contact us
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto">
				<Reviews />
			</div>
		</div>
	);
}
