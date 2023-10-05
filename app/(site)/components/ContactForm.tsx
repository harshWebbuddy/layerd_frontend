"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ContactForm({}: Props) {
	return (
		<motion.form
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			variants={{
				hidden: { opacity: 0, x: -50 },
				visible: { opacity: 1, x: 0 },
			}}
			onSubmit={(e: any) => e.preventDefault()}
			className="w-full max-w-sm mt-10 px-4 sm:px-0">
			<div className="bg-[#fbf7fb14] ring-1 ring-[#fbf7fb33] max-h-12 focus-within:ring-[#fbf7fb77] transition rounded-md flex items-center p-1 pl-3">
				<input
					type="text"
					placeholder="Enter your email address"
					className="h-full w-full bg-transparent outline-none text-sm"
				/>
				<button
					type="submit"
					className="bg-primary-red text-white flex items-center gap-1 py-2 px-3 text-sm rounded-md min-w-fit hover:bg-red-500 transition duration-300">
					<span>Submit</span>
					<Image src="/svgs/send.svg" alt="Send icon" width={18} height={18} />
				</button>
			</div>
		</motion.form>
	);
}
