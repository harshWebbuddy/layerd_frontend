import React from "react";
import PromptInput from "../ai-chat/components/PromptInput";
import Image from "next/image";

export default function page() {
	return (
		<section className="flex flex-col xl:flex-row items-start w-full absolute inset-0 h-full">
			<div className="w-full mt-20 p-4 min-h-[500px] md:pl-[58px]">
				<PromptInput
					placeholder="Ask from whopme..."
					iconSrc="/arrow-right.svg"
				/>
				<div className="flex gap-4 flex-wrap mt-10">
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
			<div className="w-full bg-[url('/ai/search-ai.png')] bg-center bg-cover h-full relative min-h-[600px]">
				<div className="absolute inset-0 backdrop-blur-xl md:px-6 h-full">
					<div className="pt-6 md:pt-10 xl:pt-32 h-full flex flex-col max-h-screen">
						<div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row gap-y-6 justify-between">
							<div className="flex gap-2">
								{["Results", "News", "Images", "Videos"].map((tab, index) => (
									<div
										key={index}
										className={`${
											index !== 3 && "border-r-[3px] border-white/40"
										} px-4 h-4 flex items-center text-white/50 ${
											index === 0 && "!text-white font-semibold"
										}`}>
										{tab}
									</div>
								))}
							</div>
							<div className="flex gap-4 px-4">
								<div className="flex items-center gap-2 cursor-pointer">
									<p className="whitespace-nowrap text-white/70">Change view</p>
									<Image
										src="/chevron-down.svg"
										alt="chevron-down"
										width={15}
										height={15}
									/>
								</div>
								<div className="flex items-center gap-2 cursor-pointer">
									<p className="whitespace-nowrap text-white/70">Refine Search</p>
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
