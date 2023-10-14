import Image from "next/image";
import React from "react";
import { bingChatCapabilities } from "../../components/constants";
import ChatStyleButtons from "./components/ChatStyleButtons";
import ChatInput from "./components/ChatInput";

export default function page() {
	return (
		<section className="grid place-content-center p-2 space-y-10">
			<div className="flex flex-col items-center gap-3">
				<Image
					src="/main/bing-chat.png"
					alt="bing chat"
					width={200}
					height={200}
					className="w-24"
				/>
				<h1 className="text-primary-yellow text-3xl font-bold">
					Welcome to the new Bing
				</h1>
				<p>Your AI-powered copilot for the web</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-16 mt-10">
					{bingChatCapabilities.map((item, index) => (
						<div key={index} className="space-y-6 flex flex-col items-center">
							<Image
								src={item.icon}
								alt="Icon"
								width={50}
								height={50}
								className={"w-14"}
							/>
							<h1 className="text-lg font-semibold">{item.title}</h1>
							<div
								key={index}
								className="bg-[#323232]/60 hover:bg-[#323232] py-3 px-4 ring-2 ring-[#514E4E]/70 cursor-pointer rounded-lg md:max-w-xs min-h-[100px] text-center">
								{item.exampleQuery}
							</div>
						</div>
					))}
				</div>
			</div>
			<p className="max-w-5xl text-center">
				Let’s learn together. Bing is powered by AI that can understand and
				generate text and images, so surprises and mistakes are possible. Make
				sure to check the facts, and share feedback so we can learn and improve!
			</p>
			<div className="flex flex-col items-center gap-10">
				<h1 className="text-lg font-semibold">Choose A Conversion Style</h1>
				<ChatStyleButtons />
			</div>
      <ChatInput/>
		</section>
	);
}
