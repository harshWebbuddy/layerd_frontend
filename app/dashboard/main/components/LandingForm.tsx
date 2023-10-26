"use client";

import Image from "next/image";
import React, { useState } from "react";
import VoiceSearch from "./modal/VoiceSearch";

export default function LandingForm() {
	const [voiceSearch, setVoiceSearch] = useState(false);

	return (
		<div className="w-full">
			<form className="space-y-14">
				<div className="bg-[url('/main/background-image-form.png')] bg-cover bg-no-repeat h-14 rounded-xl flex pl-4 border-bottom-gradient">
					<input
						type="text"
						className="flex-1 bg-transparent outline-none placeholder:capitalize text-sm"
						placeholder="search for anything"
					/>
					<div
						onClick={() => setVoiceSearch(true)}
						className="cursor-pointer grid place-content-center m-3">
						<Image
							src="/svgs/microphone.svg"
							alt="logo"
							width={30}
							height={30}
							draggable={false}
						/>
					</div>
				</div>
				<button className="mx-auto bg-gradient-to-br text-white font-semibold from-primary-red to bg-primary-yellow w-full capitalize flex items-center justify-center py-3 max-w-[170px] rounded-lg">
					Search
				</button>
			</form>
			<VoiceSearch isOpen={voiceSearch} onClose={() => setVoiceSearch(false)} />
		</div>
	);
}
