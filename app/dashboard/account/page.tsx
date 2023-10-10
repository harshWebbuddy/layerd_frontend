import Image from "next/image";
import React from "react";

export default function page() {
	const stats = [
		{
			title: "Documents Created",
			stat: "1 documents",
			image: "/main/documents.svg",
		},
		{
			title: "Words Generated",
			stat: "101 words",
			image: "/main/dictionary.svg",
		},
		{
			title: "Images Created",
			stat: "1 images",
			image: "/main/image.svg",
		},
		{
			title: "Voiceover Tasks",
			stat: "0 tasks",
			image: "/main/voice-note.svg",
		},
		{
			title: "Audio Transcribed",
			stat: "0 audio files",
			image: "/main/audio.svg",
		},
		{
			title: "Codes Generated",
			stat: "0 codes",
			image: "/main/code.svg",
		},
		{
			title: "Personalized AI ",
			stat: "0 tasks",
			image: "/main/person.svg",
		},
		{
			title: "Created Own GPT",
			stat: "0 Own GPT",
			image: "/main/technical-support.svg",
		},
		{
			title: "AI Tools",
			stat: "0 Tools",
			image: "/main/tools.svg",
		},
	];
	return (
		<div className="w-full">
			<div className="grid grid-cols-3 gap-4 w-full">
				{stats.map((item, index) => (
					<div
						key={index}
						className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-6 flex items-center justify-between">
						<div>
							<h1 className="text-sm">{item.title}</h1>
							<h2 className="text-primary-yellow text-lg font-semibold">
								{item.stat}
							</h2>
						</div>
						<Image src={item.image} alt="Stat-image" width={35} height={35} />
					</div>
				))}
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-6 space-y-5">
				<h1 className="flex items-center text-lg gap-2">
					<Image
						src={"/main/box.png"}
						alt="Stat-image"
						width={20}
						height={20}
					/>
					<span>Subscription</span>
				</h1>
				<div>
					<h1 className="text-3xl font-bold">Free Trial</h1>
					<p className="text-white/60">No Subscription / $0.00 Per Month</p>
				</div>
				<p>
					Total words available via subscription plan 0. Total prepaid words
					available 899.
				</p>
				<div className="h-5 bg-[#5F5F5F] rounded-full w-full"></div>
			</div>
		</div>
	);
}
