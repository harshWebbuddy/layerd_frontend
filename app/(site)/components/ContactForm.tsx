"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

export default function ContactForm({}: Props) {
	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 500,
			easing: "ease-out",
		 
		});
	}, []);

	return (
		<form
			data-aos="fade-up" 
			data-aos-delay="200"
			onSubmit={(e: any) => e.preventDefault()}
			className="w-full max-w-sm mt-10 px-3 sm:px-0"
		>
			<div className="bg-[#fbf7fb14] ring-1 ring-[#fbf7fb33] max-h-12 focus-within:ring-[#fbf7fb77] transition rounded-md flex items-center p-1 pl-3">
				<input
					type="text"
					placeholder="Enter your email address"
					className="h-full w-full bg-transparent outline-none text-sm overflow-hidden text-ellipsis"
					data-aos="zoom-in" 
					data-aos-delay="300"
				/>
				<button
					type="submit"
					className="bg-primary-red text-white flex items-center gap-1 py-2 px-3 text-sm rounded-md min-w-fit hover:bg-red-500 transition duration-300"
					data-aos="fade-in"
					data-aos-delay="500" 
				>
					<span>Submit</span>
					<Image src="/svgs/send.svg" alt="Send icon" width={18} height={18} />
				</button>
			</div>
		</form>
	);
}
