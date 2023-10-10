import Image from "next/image";
import React from "react";
import Form from "./components/Form";

export default function page() {
	return (
		<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
			<div className="flex items-center gap-2">
				<Image
					src="/main/user-x.svg"
					alt="Adjustments"
					width={25}
					height={25}
				/>
				<h1 className="text-primary-yellow font-semibold text-xl">
					Delete Account
				</h1>
			</div>
			<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
			<div className="space-y-4">
				<h1 className="text-xl text-white font-semibold">Warning!</h1>
				<p className="text-white/80 text-sm leading-relaxed">
					This will fully delete all your account details, generated results and
					you will not be able to recover your account afterwards
				</p>
				<Form />
			</div>
		</div>
	);
}
