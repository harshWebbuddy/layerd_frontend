import React from "react";

export default function Tools() {
	return (
		<div className="mt-40 mb-20 py-14 w-full">
			<div className="flex items-center justify-center relative">
				<div className="absolute w-full">
					<div className="flex">
						<img
							src="/ai-tools.jpg"
							alt="tools"
							className="w-full  max-h-[450px] object-cover"
							draggable={false}
							/>
						<img
							src="/wolfram-alpha.png"
							alt="tools"
							className="w-full hidden sm:block max-h-[450px] object-cover"
							draggable={false}
						/>
					</div>
				</div>
				<div className="relative z-50 overflow-hidden">
					<h1 className="uppercase text-outline text-center text-5xl md:text-6xl xl:text-[220px] font-sans font-bold text-transparent bg-clip-text whitespace-nowrap">
						Coming soon
					</h1>
				</div>
			</div>
			
		</div>
	);
}
