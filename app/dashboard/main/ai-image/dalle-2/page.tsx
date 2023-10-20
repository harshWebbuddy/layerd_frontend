import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<section className="w-full max-w-7xl mx-auto space-y-6 p-3">
			<div className="flex gap-4 items-center">
				<h1 className="text-lg font-semibold">Start with a detailed description</h1>
				<button type="button" className="bg-primary-red py-1.5 px-3 rounded-sm">Suprise me</button>
			</div>
			<div className="bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat h-14 rounded-xl flex items-center pl-4 pt-1 pr-1 pb-0.5 border-bottom-gradient">
				<input
					type="text"
					className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm overflow-hidden text-ellipsis"
					placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
				/>
				<button className="bg-gradient-to-br from-primary-red to-primary-yellow cursor-pointer grid place-content-center px-6 py-3 rounded-lg transition duration-300 font-semibold">
					Generate
				</button>
			</div>
		</section>
	);
}
