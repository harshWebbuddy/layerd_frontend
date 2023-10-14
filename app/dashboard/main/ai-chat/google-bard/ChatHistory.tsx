import Image from "next/image";
import React from "react";
import { dummyChatHistory } from "../../components/constants";

export default function ChatHistory() {
	return (
		<div className="w-full max-w-[300px] px-2 text-sm space-y-8">
			<div>
				<button className="bg-gradient-to-br from-primary-red to-primary-yellow h-full w-full rounded-md flex gap-2 py-3 justify-center items-center max-w-[250px]">
					<Image src="/main/add.svg" alt="add" width={16} height={16} />
					<span>New chat</span>
				</button>
			</div>
			<h1 className="font-semibold">Recent</h1>
			<div className="space-y-2">
				{dummyChatHistory.map((item, index) => (
					<div key={index} className="group flex items-center justify-between py-3 hover:bg-[#323232] px-4 rounded-xl cursor-pointer relative">
						<div className="h-3/5 w-0 group-hover:w-[6px] transition-all bg-primary-yellow rounded-full invisible group-hover:visible absolute left-0 top-0 translate-y-1/3" />
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
									src="/main/delete-colored.svg"
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
