import Image from "next/image";
import React from "react";
import Form from "./Form";

export default function page() {
	return (
		<section className="w-full px-5 md:px-10 pb-10">
			<div className="w-full bg-[url('/main/ai/background-voice-ai-space.png')] bg-cover bg-center rounded-2xl ring-1 ring-slate-700 p-3 md:p-7">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Image
							src="/main/ai/speech-to-text.png"
							alt="speech to text"
							width={50}
							height={50}
						/>
						<h1 className="text-primary-yellow text-2xl font-semibold">
							AI Text To Speech
						</h1>
					</div>
					<div className="flex items-center">
						<Image
							src="/main/ai/activity.svg"
							alt="speech to text"
							width={28}
							height={28}
						/>
						<p>
							Your Balance is{" "}
							<span className="font-semibold text-primary-yellow">1,000</span>{" "}
							Characters
						</p>
					</div>
				</div>
				<Form />
			</div>
		</section>
	);
}
