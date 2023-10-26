import Image from "next/image";
import React from "react";
import { dummyChatHistory } from "../../components/constants";

export default function ChatHistory() {
	return (
		<div className="w-full sm:max-w-[300px] px-2 text-sm space-y-8 flex flex-col">
			<div>
				<button className="bg-gradient-to-br from-primary-red to-primary-yellow h-full w-full rounded-md flex gap-2 py-3 justify-center items-center">
					<Image src="/main/add.svg" alt="add" width={16} height={16} />
					<span>New chat</span>
				</button>
			</div>
			<div className="space-y-2 border-[3px] rounded-xl p-3 bg-[#323232]/80 border-[#514E4E] flex-1 overflow-scroll">
				{dummyChatHistory.map((item, index) => (
					<div
						key={index}
						className="group flex justify-between py-3 hover:bg-[#3a3a3a] px-4 rounded-lg cursor-pointer">
						<div className="flex gap-2">
							<Image src="/main/chat.svg" alt="add" width={16} height={16} />
							<p className="flex-1 overflow-hidden text-ellipsis">{item}</p>
						</div>
						<button className="invisible group-hover:visible">
							<Image
								src="/main/more-option.svg"
								alt="add"
								width={5}
								height={5}
							/>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
