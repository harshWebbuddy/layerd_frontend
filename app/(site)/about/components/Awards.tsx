import React from "react";
import { awards } from "./constants/Awards";
import Image from "next/image";
export default function Awards() {
	return (
		<div className="mt-20">
			<div className="relative w-full">
				<div className="w-full">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Awards and Recognitions
					</h1>
				</div>
				<div className="mt-10 grid grid-cols-3 lg:grid-cols-4 gap-10 opacity-50">
					{awards.map((item, index) => (
						<div key={index}>
							<Image src={item} alt="Item" width={150} height={100} />
						</div>
					))}
				</div>
				<div className="absolute bottom-1/2 -right-40 -rotate-90  h-[100px]">
					<Image
						src="/slash.png"
						width={600}
						height={1}
						alt="Slashes"
						className="absolute left-0 w-[500px] h-[80px] -translate-y-5 z-0"
					/>
					<div className="uppercase text-3xl font-bold text-outline-sm  text-transparent bg-clip-text whitespace-nowrap">
						Awards & Recognitions
					</div>
				</div>
			</div>
		</div>
	);
}
