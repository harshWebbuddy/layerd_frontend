import Image from "next/image";
import React from "react";
import DropZone from "../../components/DropZone";

export default function page() {
	return (
		<section className="relative">
			<div className="w-full max-w-5xl mx-auto h-full flex flex-col items-center space-y-10 mt-10">
				<div className="flex gap-4">
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<div className="text-black bg-primary-yellow h-6 w-6 grid place-content-center text-xs rounded-full">
								1
							</div>
							<p className="font-semibold text-lg">Upload your picture</p>
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
							<p className="font-semibold text-lg text-[#8D8D99]">
								Room Type / Mode
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
								3
							</div>
							<p className="font-semibold text-lg text-[#8D8D99]">
								Style & Others
							</p>
						</div>
					</div>
				</div>
				<DropZone isInterior={true} />
				<p className="text-[#ABAEB7]">
					Take a photo of your current room. For best results make sure it shows
					the entire room in a{" "}
					<span className="text-primary-yellow">
						90° straight angle facing a wall or window horizontally (click for
						example).
					</span>{" "}
					Not from a corner or angled, and not a wide angle photo as it's
					trained on regular photos. The AI isn't great at angled pics (yet)!
					Uploads + renders are shown on site but auto deleted after 15 mins. To
					make 100% private HQ renders without deletion and{" "}
					<span className="text-primary-yellow">watermark upgrade to Pro</span>{" "}
					and you get your own private workspace.
				</p>
				<div className="flex justify-center">
					<button className="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] p-4 w-[250px] rounded-lg self-end">
						<span>Next</span>
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
				<h1 className="text-[#0b0e1721] relative select-none text-9xl font-[800] m-4 uppercase">Interior</h1>
			</div>
		</section>
	);
}
