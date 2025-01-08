"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Option } from "@/types";

interface Props {
	option: Option;
	index: number;
	isFullWidth?: boolean;
	isBorderShown?: boolean;
}

export default function BoxComponent({
	option,
	index,
	isFullWidth,
	isBorderShown,
}: Props) {
	useEffect(() => {
		AOS.init({
			duration: 500,
			easing: "ease-out",
		 
		});
	}, []);

	return (
		<div
			className={`py-6 px-5 sm:px-7 border-corner ${
				isBorderShown && "border-corner-default"
			} ${!isFullWidth && "md:max-w-[340px]"} group rounded-2xl hover:bg-[#1E1E26]/40 cursor-pointer`}
			key={index}
			data-aos="fade-up" 
			data-aos-delay="300" 
		>
			<img
				src={option.icon! || option.image!}
				alt="Icon"
				width={100}
				height={100}
				className="w-16 h-16"
				draggable={false}
				data-aos="zoom-in" 
				data-aos-delay="500"
			/>
			<div className="mt-6">
				<h1
					className="group-hover:text-primary-yellow text-xl font-semibold capitalize"
					data-aos="fade-in" 
					data-aos-delay="700" 
				>
					{option.title}
				</h1>
				<p
					className="mt-3 text-white/50 text-sm leading-relaxed group-hover:text-white"
					data-aos="fade-in" 
					data-aos-delay="900" 
				>
					{option.description}
				</p>
			</div>
		</div>
	);
}
