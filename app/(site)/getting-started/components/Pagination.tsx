"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { TablistData } from "../constants";
import Link from "next/link";

export default function Pagination() {
	const pathname = usePathname();

	return (
		<div className="flex gap-10 mt-10">
			{TablistData.findIndex((tab) => tab.link === pathname) !== 0 && (
				<Link
					href={
						TablistData[
							TablistData.findIndex((tab) => tab.link === pathname) - 1
						].link
					}
					className="border border-[#4B4B4B] flex items-center w-full px-4 py-7 rounded-xl cursor-pointer hover:border-white/80 transition duration-300 hover:bg-[#201f24]/30 max-w-md">
					<Image
						src="/svgs/Arrow 2.svg"
						alt="Left"
						width={30}
						height={30}
						className=" h-6"
					/>
					<div className="flex flex-col items-end w-full">
						<p className="text-white/60 text-sm">Previous</p>
						<h1 className="text-xl font-bold">
							{
								TablistData[
									TablistData.findIndex((tab) => tab.link === pathname) - 1
								].title
							}
						</h1>
					</div>
				</Link>
			)}
			{TablistData.findIndex((tab) => tab.link === pathname) !==
				TablistData.length - 1 && (
				<Link
					href={
						TablistData[
							TablistData.findIndex((tab) => tab.link === pathname) + 1
						].link
					}
					className="border border-[#4B4B4B] flex items-center w-full px-4 py-7 rounded-xl cursor-pointer hover:border-white/80 transition duration-300 hover:bg-[#201f24]/30 max-w-md">
					<div className="flex flex-col items-start w-full">
						<p className="text-white/60 text-sm">Next</p>
						<h1 className="text-xl font-bold">
							{
								TablistData[
									TablistData.findIndex((tab) => tab.link === pathname) + 1
								].title
							}
						</h1>
					</div>
					<Image
						src="/svgs/Arrow 1.svg"
						alt="Left"
						width={30}
						height={30}
						className=" h-6"
					/>
				</Link>
			)}
		</div>
	);
}
