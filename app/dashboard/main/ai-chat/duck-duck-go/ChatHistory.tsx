import Image from "next/image";
import React from "react";
import { dummyChatHistory } from "../../components/constants";

export default function ChatHistory() {
	return (
		<div className="bg-[url('/main/ai/background-voice-ai-forms.png')] bg-cover bg-center bg-no-repeat w-full sm:max-w-[300px] px-2 py-6 rounded-2xl text-sm space-y-6">
			<div className="flex justify-center">
				<button className="bg-gradient-to-br from-primary-red to-primary-yellow h-full w-full rounded-md flex gap-2 py-3 justify-center items-center sm:max-w-[250px]">
					<Image src="/main/add.svg" alt="add" width={16} height={16} />
					<span>New chat</span>
				</button>
			</div>
			<h1 className="font-semibold px-4">June</h1>
			<div className="space-y-2">
				{dummyChatHistory.map((item, index) => (
					<div key={index} className="group flex items-center justify-between py-3 text-white/60 hover:text-white px-4 cursor-pointer">
						<div className="flex items-center gap-2">
							<Image src="/main/chat.svg" alt="add" width={16} height={16} />
							<p className="flex-1 overflow-hidden text-ellipsis">{item}</p>
						</div>
						<div className="flex items-center gap-3 invisible group-hover:visible">
							<button>
								<Image src="/main/edit.svg" alt="add" width={16} height={16} />
							</button>
							<button>
								<Image
									src="/main/delete.svg"
									alt="add"
									width={15}
									height={15}
								/>
							</button>
						</div>
					</div>
				))}
			</div>
			<h1 className="font-semibold px-4">July</h1>
			<div className="space-y-2">
				{dummyChatHistory.map((item, index) => (
					<div key={index} className="group flex items-center justify-between py-3 text-white/60 hover:text-white px-4 cursor-pointer">
						<div className="flex items-center gap-2">
							<Image src="/main/chat.svg" alt="add" width={16} height={16} />
							<p className="flex-1 overflow-hidden text-ellipsis">{item}</p>
						</div>
						<div className="flex items-center gap-3 invisible group-hover:visible">
							<button>
								<Image src="/main/edit.svg" alt="add" width={16} height={16} />
							</button>
							<button>
								<Image
									src="/main/delete.svg"
									alt="add"
									width={15}
									height={15}
								/>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
