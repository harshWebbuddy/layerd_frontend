import React from "react";
import Dropzone from "../components/DropZone";

export default function page() {
	return (
		<section className="w-full">
			<div className="max-w-5xl mx-auto space-y-4">
				<div className="flex flex-col justify-center items-center gap-3">
					<h1 className="text-3xl font-bold">
						Upload Knowledge to Default brain
					</h1>
					<p className="text-[#ABAEB7]">
						Text, document, spreadsheet, presentation, audio, video, and URLs
						supported
					</p>
				</div>
				<Dropzone />
				<div className="flex justify-center">
					<button className="bg-[#494949d5] hover:bg-[#494949] w-full max-w-[140px] rounded-xl py-3 font-semibold">
						Upload
					</button>
				</div>
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t-[3px] border-[#3D3D3D]" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="bg-[#212327] px-2 text-white text-lg">Or</span>
					</div>
				</div>
				<div className="bg-[url('/background-image-create-your-own.png')] bg-cover bg-no-repeat bg-center rounded-2xl flex gap-5 p-10 ring-1 ring-slate-600/70">
					<div className="border-gradient h-14 rounded-2xl flex items-center bg-gradient-to-br from-[#ffffff21] to-[#8f8f8f0f] px-3 flex-1">
						<input
							type="text"
							placeholder="Enter website URL"
							className="bg-transparent w-full h-full z-10 outline-none "
						/>
					</div>
					<button className="bg-primary-red w-full max-w-[140px] rounded-xl font-semibold">
						Crawl
					</button>
				</div>
				<div className="flex justify-center">
					<button className="bg-gradient-to-r from-primary-red to-primary-yellow w-full max-w-[140px] rounded-xl py-3 font-semibold">
						Chat
					</button>
				</div>
			</div>
		</section>
	);
}
