import React from "react";
import Difficulty from "./components/Difficulty";
import Image from "next/image";

export default function page() {
	return (
		<section className="relative h-full text-sm flex justify-center items-center mb-60">
			<div className="w-[600px] h-[138px] bg-[#FFB076] blur-[250px] absolute top-1/3 left-[-550px]" />
			<div className="h-full space-y-5 w-full max-w-3xl flex flex-col  justify-center">
				<h1 className="text-2xl font-bold">Select A Question Type</h1>
				<p className="text-[#ABAEB7] max-w-md">
					We have hundreds of questions from top tech companies. Choose a type
					to get started.
				</p>
				<Difficulty />
				<button className="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] p-5 w-[200px] rounded-lg self-end">
					<span>Contine</span>
					<Image
						src="/arrow-right.svg"
						alt="Arrow Right"
						width={20}
						height={20}
					/>
				</button>
			</div>
		</section>
	);
}
