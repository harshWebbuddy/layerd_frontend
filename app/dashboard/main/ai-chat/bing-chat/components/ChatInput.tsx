import Image from "next/image";
import React from "react";

export default function ChatInput() {
	return (
		<div className="flex gap-4">
			<button className="ring-2 ring-white bg-gradient-to-br from-primary-red to-primary-yellow flex gap-2 p-3 rounded-lg shadow-lg shadow-primary-yellow/50">
				<Image src="/main/brush.svg" alt="brush" width={20} height={20} />
				<span>New Topic</span>
			</button>
			<div className="bg-[#323232] ring-2 ring-[#514E4E] flex items-center h-12 rounded-lg flex-1 px-3 gap-3">
				<Image
					src="/main/brand-hipchat.svg"
					alt="brush"
					width={23}
					height={23}
				/>
				<input
					type="text"
					placeholder="Ask me anything"
					className="flex-1 bg-transparent outline-none"
				/>
				<button>
					<Image src="/main/scan.svg" alt="brush" width={23} height={23} />
				</button>
				<button>
					<Image
						src="/svgs/microphone.svg"
						alt="brush"
						width={23}
						height={23}
					/>
				</button>
			</div>
		</div>
	);
}
