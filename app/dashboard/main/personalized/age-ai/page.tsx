import React from "react";
import Upload from "./components/Upload";
import ImageOutput from "./components/ImageOutput";

export default function page() {
	return (
		<section className="relative h-full mb-40 p-3">
			<div className="h-full flex  flex-col xl:flex-row justify-center gap-10 items-center max-w-7xl mx-auto">
				<div className="space-y-6 w-full">
					<h1 className="capitalize mt-4 text-3xl md:text-5xl bg-gradient-to-b from-white to-primary-red !leading-[60px] font-bold text-transparent bg-clip-text max-w-[500px]">
						Use artificial intelligence to see how you're aging
					</h1>
					<p className="text-[#ABAEB7]">
						Curious how you'll look in 10 years? 20 years? When you're 90?{" "}
						<span className="font-semibold text-primary-yellow">
							Upload a photo and find out! 100%
						</span>{" "}
						free and privacy-friendly
					</p>
					<Upload />
					<p className="text-xs text-[#ABAEB7]">
						116.8K photos generated and counting!
					</p>
				</div>
        <div className="w-full">
          <ImageOutput/>
        </div>
			</div>
			<div className="w-[600px] h-[138px] bg-[#FFB076] blur-[250px] absolute top-1/3 left-[-550px]" />
		</section>
	);
}
