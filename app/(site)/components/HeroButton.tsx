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
export default function HeroButton({ angle, index, item }: IProps) {
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
					className={`absolute z-[-1] opacity-0 -inset-5 rounded-full bg-custom-${index} transition duration-500 group-hover:opacity-10 blur-[2px]`}></div>
				<div
					className={`absolute z-[-1] opacity-0 -inset-2 rounded-full bg-custom-${index} transition duration-500 group-hover:opacity-30`}></div>
				<div
					className={`relative z-1 bg-custom-${index} max-w-fit transition ${
						index === 3 ? "p-8" : "p-5 mt-10"
					} rounded-full`}
					style={{
						transform: `rotate(${-angle}deg)`, // Apply reverse rotation to the image
					}}>
					<Image src={item.icons} alt="icon" height={60} width={60} />
					<div
						className={`opacity-0 -top-16 -right-24 group-hover:opacity-100 absolute flex items-end gap-3`}>
						<Image
							src={`/svgs/polygon-arrow-${index + 1}.svg`}
							alt="Polygon svg"
							height={20}
							width={20}
							className="translate-y-4 translate-x-2"
						/>
						<div
							className={`uppercase transition text-sm p-2 bg-custom-${index} rounded-md ring-gray-600  whitespace-nowrap`}>
							<span>{item.title}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
