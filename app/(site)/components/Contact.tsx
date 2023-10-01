"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
type Props = {};

export default function Contact({}: Props) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 },
			}}
			className="my-28 relative flex justify-center items-center">
			<div className="absolute h-[200px] w-[50px] rotate-45 blur-[70px] bg-gradient-to-br from-primary-red to-primary-yellow top-1/2 right-1/2 transform translate-x-1/2 -translate-y-[10%] " />
			<div className="max-w-5xl relative z-10 backdrop-blur-3xl bg-gradient-to-b from-transparent to-white/[0.05] w-full rounded-b-3xl flex flex-col items-center gap-2 border-b-[3px] border-white/10 py-14">
				<h1>
					<Image
						src="/emoji-hands.png"
						alt="emoji-handsup"
						width={70}
						height={70}
					/>
				</h1>
				<motion.h1
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className="text-center font-semibold text-3xl">
					Are You Ready
					<br /> For Getting Future Updates
				</motion.h1>
				<ContactForm/>
			</div>
		</motion.div>
	);
}
