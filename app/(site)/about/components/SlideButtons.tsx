import React from "react";
import { useSwiper } from "swiper/react";

export default function SlideButtons() {
	const swiper = useSwiper();

	return (
		<div className="flex justify-center gap-4 sm:gap-10 mt-6 relative z-50">
			<button className="button-prev-slide p-2 hover:bg-gray-700/50 rounded-full transition duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
					/>
				</svg>
			</button>
			<button className="button-next-slide p-2 hover:bg-gray-700/50 rounded-full transition duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-6 h-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>
			</button>
		</div>
	);
}
