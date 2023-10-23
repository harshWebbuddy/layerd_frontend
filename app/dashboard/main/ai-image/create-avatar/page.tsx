import React from "react";
import Dropzone from "./components/DropZone";
import Image from "next/image";

export default function page() {
	return (
		<section className="max-w-7xl mx-auto w-full p-3">
			<div className="flex justify-between">
				<h1 className="capitalize text-2xl text-primary-yellow font-semibold">
					Create A New Studio
				</h1>
				<button className="bg-primary-red px-3 py-1.5 rounded-sm">
					Prompt
				</button>
			</div>
			<div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20 border-[3px] border-primary-yellow border-dashed rounded-2xl bg-[#27272799] px-5 py-10 md:p-20 mt-10 min-h-[600px]">
				<Dropzone />
				<div className="w-full md:w-1 h-[2px] md:h-[320px] bg-[#494949]"></div>
				<div className="relative z-[1] space-y-8">
					<p className="leading-[2] capitalize">
						To get the best results, we suggest uploading 3 full body or entire
						object photos, 5 medium shots of the chest and up, and 10 close-up
						photos and:
					</p>
					<div className="space-y-3">
						<div className="flex gap-3">
							<span>
								<Image
									src="/main/ai/circle-check.svg"
									alt="circle-check"
									width={24}
									height={24}
									className="translate-y-2"
								/>
							</span>
							<p className="leading-[2]">
								Mix it up - change body pose, background, and lighting in each
								photo
							</p>
						</div>
						<div className="flex gap-3">
							<span>
								<Image
									src="/main/ai/circle-check.svg"
									alt="circle-check"
									width={24}
									height={24}
									className="translate-y-1"
								/>
							</span>
							<p className="leading-[2]">Capture a range of expressions</p>
						</div>
						<div className="flex gap-3">
							<span>
								<Image
									src="/main/ai/circle-check.svg"
									alt="circle-check"
									width={24}
									height={24}
									className="translate-y-1"
								/>
							</span>
							<p className="leading-[2]">
								Show the subject's eyes looking in different directions
							</p>
						</div>
					</div>
				</div>
				<Image
					src="/main/ai/avatar-image.png"
					alt="create-avatar"
					width={300}
					height={300}
					className="w-[150px] md:w-[210px] h-[150px] md:h-[210px] rounded-xl object-cover transform -rotate-45 absolute top-0 left-0 -translate-x-20 z-[1]"
				/>
				<Image
					src="/main/ai/avatar-image-cc.png"
					alt="create-avatar"
					width={300}
					height={300}
					className="w-[90px] h-[90px] rounded-xl object-cover transform rotate-[-30deg] absolute top-12 left-24 md:left-48"
				/>
			</div>
			<div className="mt-10">
				<h1 className="capitalize text-2xl font-semibold">My Studio</h1>
				<div className="mt-6 bg-[url('/main/ai/background-avatar-studio.png')] bg-cover bg-center bg-no-repeat grid place-content-center h-[110px] rounded-2xl border-r border-slate-600">
					<h1 className="text-white/50 font-semibold text-lg">
						No Studio Available Yet
					</h1>
				</div>
			</div>
		</section>
	);
}
