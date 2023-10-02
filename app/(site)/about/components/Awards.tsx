"use client"

import React from "react";
import { motion } from "framer-motion";
import { awards } from "./constants/Awards";
import Image from "next/image";
export default function Awards() {
	return (
		<div className="mt-20">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.1 }}
				variants={{
					hidden: { opacity: 0, x: -5 },
					visible: { opacity: 1, x: 0 },
				}}
				className="w-full">
				<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
					Awards and Recognitions
				</h1>
			</motion.div>
			<div className="mt-10 grid grid-cols-3 lg:grid-cols-4 gap-10">
				{awards.map((item) => (
					<Image src={item} alt="Item" width={150} height={100} />
				))}
			</div>
		</div>
	);
}
