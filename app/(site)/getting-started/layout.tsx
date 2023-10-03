import React from "react";
import Tablist from "./components/Tablist";
import Image from "next/image";
import Pagination from "./components/Pagination";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[30vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-1">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
						Getting started
					</h1>
				</div>
			</div>
			<section className="max-w-[1300px] mx-auto mt-20">
				<div className="flex items-start gap-20">
					<Tablist />

					<div className="w-full">
						<div>{children}</div>
						<Pagination />
					</div>
				</div>
			</section>
		</main>
	);
}
