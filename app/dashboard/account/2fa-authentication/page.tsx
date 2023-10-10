import Image from "next/image";
import React from "react";
import Form from "./components/Form";

export default function page() {
	return (
		<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
			<div className="flex items-center gap-2">
				<Image
					src="/main/lock-access-colored.svg"
					alt="Adjustments"
					width={25}
					height={25}
				/>
				<h1 className="text-primary-yellow font-semibold text-xl">
					Activate 2FA Authentication
				</h1>
			</div>
			<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
			<Form />

			<p className="text-sm text-white/80 mt-6 leading-relaxed">
				Google Authenticator is a multifactor authentication application for
				mobile devices. It generates timed codes used during the 2-step
				verication process. To use Google Authenticator, install the Google
				Authenticator app on your mobile device.
			</p>
		</div>
	);
}
