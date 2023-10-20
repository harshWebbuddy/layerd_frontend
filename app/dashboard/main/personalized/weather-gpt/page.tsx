import React from "react";

export default function page() {
	return (
		<section className="relative h-full">
			<div className="w-[200px] h-[228px] bg-[#FFB076] blur-[150px] absolute top-1/4 left-[-200px] z-[2]" />
			<div className="relative">
				<div className="bg-[url('/main/ai/landscape-background.png')] absolute inset-0 bg-no-repeat h-[400px] bg-center bg-cover">
					<div className="h-60 bg-gradient-to-b from-[#212327] via-[#212327]/70 to-[#21232700] w-full absolute top-0" />
					<div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 p-3">
						<h1 className="text-5xl font-bold text-center">Weather GPT</h1>
						<p className="text-[#ABAEB7] text-center">
							ChatGPT Plugin to get the weather of any given location
						</p>
					</div>
					<div className="h-60 bg-gradient-to-t from-[#212327] via-[#212327]/70 to-[#21232700] w-full absolute bottom-0" />
				</div>
			</div>
			<div className="max-w-6xl mx-auto mt-[300px] relative z-10">
				<div className="bg-gradient-to-b from-[#E74259] to-[#E5AB73] w-[200px] h-[200px] xs:w-[320px] xs:h-[320px] rounded-full mx-auto weather-box-shadow" />
				<div className="flex  flex-col xs:flex-row justify-between gap-6 mt-10">
					<div className="space-y-4">
						<p className="text-center text-sm text-[#ABAEB7]">Your Location</p>
						<h1 className="text-3xl text-center font-semibold">Lahore, Pakistan</h1>
					</div>
					<div className="space-y-4">
						<p className="text-center text-sm text-[#ABAEB7]">Current Temperature</p>
						<h1 className="text-3xl text-center font-semibold">29°C / 84.2°F</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
