import Image from "next/image";
import React from "react";
import Form from "./Form";
import Editor from "./Editor";

export default function page() {
	return (
		<section className="h-full px-5 md:px-10 pb-10 flex-1">
			<div className="flex  flex-col xl:flex-row gap-6">
				<div className="w-full bg-[url('/main/ai/background-voice-ai-forms.png')] xl:max-w-[480px] ring-1 ring-slate-600/80 rounded-2xl bg-center bg-cover bg-no-repeat h-full p-4 md:p-7 space-y-4">
					<div className="flex items-center gap-4">
						<Image
							src="/main/ai/speech-to-text.png"
							alt="speech to text"
							width={50}
							height={50}
						/>
						<h1 className="text-white text-2xl font-semibold">
							AI Speech To Text
						</h1>
					</div>
					<p className="text-white/70">
						Transcribe your audio files and translate them to English
					</p>
					<div className="flex items-center">
						<Image
							src="/main/ai/activity.svg"
							alt="speech to text"
							width={28}
							height={28}
						/>
						<p>
							Your Balance is{" "}
							<span className="font-semibold text-primary-yellow">
								10 Minutes
							</span>
						</p>
					</div>
					<Form />
				</div>
				<div className="w-full bg-[url('/main/ai/background-voice-ai-space.png')] bg-center bg-no-repeat bg-cover rounded-2xl ring-1 ring-slate-600 p-4 md:p-7 h-full">
					<Editor/>
				</div>
			</div>
		</section>
	);
}
