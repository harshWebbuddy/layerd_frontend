import React from "react";

export default function DeveloperToolsPage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-[70vh] space-y-10">
			<div className="relative z-50 px-3">
				<h1 className="uppercase text-outline text-center text-5xl md:text-[100px] font-sans font-bold text-transparent bg-clip-text whitespace-nowrap">
					Coming soon
				</h1>
			</div>
			<div className="p-3">
				<h1 className="text-2xl text-primary-yellow">
					We create Some awesome stuff for you.
				</h1>
			</div>
			<div className="">
				<h1 className="text-2xl text-center">Arriving in...</h1>
				<div className="flex gap-1.5 sm:gap-5 mt-6">
					<div className="bg-gradient-to-b from-black to-black/10 rounded-xl flex flex-col p-3 sm:min-w-[150px]">
						<div className="border-b border-neutral-700 p-6 grid place-content-center text-3xl font-black">20</div>
						<div className="p-6 grid place-content-center text-xl">days</div>
					</div>
					<div className="bg-gradient-to-b from-black to-black/10 rounded-xl flex flex-col p-3 sm:min-w-[150px]">
						<div className="border-b border-neutral-700 p-6 grid place-content-center text-2xl font-black">13</div>
						<div className="p-6 grid place-content-center text-xl">hrs</div>
					</div>
					<div className="bg-gradient-to-b from-black to-black/10 rounded-xl flex flex-col p-3 sm:min-w-[150px]">
						<div className="border-b border-neutral-700 p-6 grid place-content-center text-3xl font-black">26</div>
						<div className="p-6 grid place-content-center text-xl">mins</div>
					</div>
				</div>
			</div>
		</main>
	);
}
