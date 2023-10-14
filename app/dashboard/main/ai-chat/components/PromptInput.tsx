import Image from "next/image";
import React from "react";
interface Props {
	isShadowAbsent?: boolean;
}
export default function PromptInput({ isShadowAbsent }: Props) {
	return (
		<div
			className={`bg-[#323232] ring-2 ring-[#514E4E] flex items-center h-[50px] rounded-lg py-1 pl-3 pr-1 gap-3 my-10 ${
				!isShadowAbsent && "shadow-xl shadow-primary-yellow/20 "
			}`}>
			<input
				type="text"
				placeholder="Enter a prompt here"
				className="flex-1 bg-transparent outline-none"
			/>
			<button className="bg-gradient-to-br from-primary-red to-primary-yellow h-full w-11 rounded-md grid place-content-center">
				<Image src="/svgs/send.svg" alt="brush" width={23} height={23} />
			</button>
		</div>
	);
}
