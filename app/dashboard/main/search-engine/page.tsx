import React from "react";
import PromptInput from "../ai-chat/components/PromptInput";
import Image from "next/image";

export default function page() {
	return (
		<section className="flex items-start w-full absolute inset-0 h-full">
			<div className="w-full mt-20 p-4">
				<PromptInput placeholder="Ask from whopme..." />
				<div className="flex gap-4 flex-wrap">
					{[
						"AI career ideas",
						"When did Biden first become a Senator?",
						"history of the birkin bag",
						"Use Bang shortcuts, eg '!w nuclear fusion'",
						"Elon Musk",
					].map((item, index) => (
						<div
							key={index}
							className="bg-[#363636] py-1.5 px-3 rounded-lg whitespace-nowrap">
							{item}
						</div>
					))}
				</div>
			</div>
			<div className="w-full bg-[url('/ai/search-ai.png')] bg-center bg-cover h-full relative">
				<div className="absolute inset-0 backdrop-blur-md px-6 h-full">
					<div className="pt-32 h-full flex flex-col max-h-screen">
						<div className="flex justify-between">
							<div className="flex gap-2">
								{["Results", "News", "Images", "Videos"].map((tab, index) => (
									<div
										className={`${
											index !== 3 && "border-r-[3px] border-white/40"
										} px-4 h-4 flex items-center`}>
										{tab}
									</div>
								))}
							</div>
							<div className="flex gap-4">
								<div className="flex items-center gap-2 cursor-pointer">
									<p>Change view</p>
									<Image
										src="/chevron-down.svg"
										alt="chevron-down"
										width={15}
										height={15}
									/>
								</div>
								<div className="flex items-center gap-2 cursor-pointer">
									<p>Refine Search</p>
									<Image
										src="/chevron-down.svg"
										alt="chevron-down"
										width={15}
										height={15}
									/>
								</div>
							</div>
						</div>
						<div className="h-full flex-1 grid place-content-center mb-40">
							<h1 className="text-xl">No Searches!</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
