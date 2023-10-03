"use client";
import Image from "next/image";
import React from "react";
type Item = {
	icons: string;
	link: string;
	title: string;
};
interface IProps {
	angle: number;
	index: number;
	item: Item;
}
export default function HeroButton({

	angle,
	index,
	item,
}: IProps) {
	const navigateHandler = (link: string) => {
		const scrollToDiv = document.getElementById(link);
		if (scrollToDiv) {
			scrollToDiv.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div
			key={index}
			onClick={() => navigateHandler(item.link)}
			className="cursor-pointer"
			style={{
				transform: `rotate(${angle}deg)`,
			}}>
			<div className="relative group">
				<div
					className={`absolute z-[1] opacity-0 -inset-4 rounded-full bg-custom-${index} transition duration-500 group-hover:opacity-10`}></div>
				<div
					className={`absolute z-[1] opacity-0 -inset-2 rounded-full bg-custom-${index} transition duration-500 group-hover:opacity-30`}></div>
				<div
					className={`relative z-20 bg-custom-${index} max-w-fittransition p-8 rounded-full`}
					style={{
						transform: `rotate(${-angle}deg)`, // Apply reverse rotation to the image
					}}>
					<Image src={item.icons} alt="icon" height={60} width={60} />
					<div
						className={`opacity-0 uppercase -top-16 -right-10 transition group-hover:opacity-100 absolute p-2 bg-custom-${index} whitespace-nowrap rounded-md ring-gray-600`}>
						{item.title}
					</div>
				</div>
			</div>
		</div>
	);
}
