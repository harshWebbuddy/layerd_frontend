import React from "react";

export default function AiVoicePage() {
	return (
		<section className="space-y-8">
			<h1 className="font-bold text-xl">AI Voice</h1>
			<div className="space-y-6">
				<div className="space-y-2">
					<h1 className="font-bold text-xl">Step 1:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						Navigate to the AI Voice tool on WhopMe.com.
					</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-xl">Step 2:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						Choose between Text to Speech (TTS) or Speech to Text (STT)
						functionality.
					</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-xl">Step 3:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						For TTS, input the text you want to convert into spoken words and
						click on 'Convert'. You will hear the converted speech.
					</p>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-xl">Step 4:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						For STT, upload the audio file you want to convert into written text
						and click on 'Convert'. You will see the converted text.
					</p>
				</div>
			</div>
		</section>
	);
}
