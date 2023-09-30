"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function Reviews({}: Props) {
	return (
		<div>
			<div className="bg-[url('/cheerful-man.avif')] w-full bg-no-repeat bg-cover h-[600px] bg-center rounded-[50px] relative p-4 md:px-28 py-20 overflow-hidden mt-10">
				<div className="bg-black opacity-70 absolute inset-0" />
				<div className="before:content-quotes relative z-50 w-full">
					<Image src="/svgs/quotes.svg" alt="Image" width={70} height={70} />
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.5 }}
						transition={{ duration: 0.1 }}
						variants={{
							hidden: { opacity: 0, x: -5 },
							visible: { opacity: 1, x: 0 },
						}}
						className="max-w-2xl text-lg mt-10 leading-relaxed">
						Lorem ipsum dolor sit amet consectetur. Vel pharetra fringilla
						ullamcorper scelerisque mattis pellentesque mi. Odio et mauris quis
						aliquet vestibulum est dui aliquet. Ultrices libero et nunc
						tristique euismod. In sagittis imperdiet suspendisse est ipsum
						facilisis. Etiam laoreet platea id imperdiet donec.
					</motion.p>
					<div className="flex flex-col md:flex-row justify-between items-center mt-28 sm:mt-40">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.5 }}
							transition={{ duration: 0.1 }}
							variants={{
								hidden: { opacity: 0, x: -5 },
								visible: { opacity: 1, x: 0 },
							}}
							className="flex items-center gap-2 w-full cursor-pointer">
							<button className="flex items-center gap-5">
								<Image
									src={"/svgs/play.svg"}
									alt="play"
									height={60}
									width={60}
								/>
								<span className="font-bold text-xl">Watch video</span>
							</button>
						</motion.div>
						<div className="w-full flex flex-col md:items-end">
							<h1 className="text-3xl text-white leading-relaxed font-semibold">Sheraz Ahmed</h1>
							<p className="text-[#D8D8D8] text-lg">Senior product designer</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-4 sm:gap-10 mt-6">
				<button className="p-2 hover:bg-gray-700/50 rounded-full transition duration-300">
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
				<button className="p-2 hover:bg-gray-700/50 rounded-full transition duration-300">
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
		</div>
	);
}
