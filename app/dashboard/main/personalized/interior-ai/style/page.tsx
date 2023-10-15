import Selection from "@/app/dashboard/account/me/components/Selection";
import Image from "next/image";
import React from "react";
import Form from "./Form";

export default function page() {
	return (
		<section className="relative h-full">
			<div className="w-full max-w-6xl mx-auto h-full  flex flex-col items-center space-y-10 mt-10">
				<div className="flex gap-4">
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-[#8D8D99] bg-[#E1E1E6] h-6 w-6 grid place-content-center text-xs rounded-full">
								1
							</div>
							<p className="font-semibold text-lg text-[#8D8D99]">
								Upload your picture
							</p>
						</div>
						<Image
							src="/main/ai/move-left.svg"
							alt="move-left"
							width={20}
							height={20}
						/>
					</div>
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-[#8D8D99] bg-[#E1E1E6] h-6 w-6 grid place-content-center text-xs rounded-full">
								2
							</div>
							<p className="font-semibold text-lg text-[#8D8D99]">Room Type / Mode</p>
						</div>
						<Image
							src="/main/ai/move-left.svg"
							alt="move-left"
							width={20}
							height={20}
						/>
					</div>
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-black bg-primary-yellow h-6 w-6 grid place-content-center text-xs rounded-full">
								3
							</div>
							<p className="font-semibold text-lg ">
								Style & Others
							</p>
						</div>
					</div>
				</div>
				<Form />
				<div className="flex justify-center gap-4">
					<button className="font-bold flex items-center justify-between gap-3 ring-1 ring-white/70 bg-transparent hover:bg-[#3d3d3d1c] p-4 w-[250px] rounded-lg self-end">
						<Image
							src="/arrow-left.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
						<span>Back</span>
					</button>
					<button className="font-bold flex items-center justify-between gap-3 bg-gradient-to-br from-primary-red to-primary-yellow p-4 w-[250px] rounded-lg self-end">
						<span>Render New Idea</span>
						<Image
							src="/arrow-right.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
					</button>
				</div>
			</div>
			<div className="fixed bottom-0">
				<div className="w-[600px] h-[138px] bg-[#FFB076] blur-[250px] absolute bottom-[-100px] left-[-200px]" />
				<h1 className="text-[#0b0e1721] relative select-none text-9xl font-[800] m-4 uppercase">
					Interior
				</h1>
			</div>
		</section>
	);
}
