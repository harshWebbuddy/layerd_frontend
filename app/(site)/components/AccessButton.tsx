"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
export default function AccessButton() {
	const [isEarlyAccess, setIsEarlyAccess] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	function handleChange(e: any) {
		setEmail(e.target.value);
		if (email) {
			setIsValid(true);
		}
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);
		// handle api instead
		setTimeout(() => {
			setLoading(false);
			setIsSuccess(true);
		}, 2000);
	};
	const formRef = useRef<HTMLFormElement | null>(null);
	const handleOutsideClick = (e: any) => {
		if (formRef.current && !formRef.current.contains(e.target)) {
			setIsEarlyAccess(false);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.addEventListener("mousedown", handleOutsideClick);
		};
	}, []);
	return (
		<div className="flex flex-col justify-center items-center w-full">
			{!isEarlyAccess && (
				<button
					onClick={() => setIsEarlyAccess(true)}
					className="px-6 py-3.5 max-w-fit bg-neutral-800/50 ring-1 ring-inset ring-neutral-700 mt-5 capitalize text-sm rounded-md hover:bg-primary-red hover:ring-0 transition duration-300 font-semibold">
					Get early access
				</button>
			)}
			{isEarlyAccess && (
				<motion.form
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					ref={formRef}
					onSubmit={handleSubmit}
					className="min-w-full sm:min-w-[500px] max-w-[500px] mt-10">
					<div className="bg-[#fbf7fb14] ring-1 ring-[#fbf7fb33] h-12 focus-within:ring-[#fbf7fb77] transition rounded-md flex items-center p-1 pl-3">
						<input
							type="text"
							disabled={loading}
							placeholder="Enter your email address"
							onChange={handleChange}
							className="h-full w-full bg-transparent outline-none text-sm"
						/>
						{isValid && (
							<button
								type="submit"
								disabled={loading}
								className={clsx(
									" bg-primary-red text-white flex items-center gap-1 p-3 h-full w-8 text-sm rounded-md min-w-fit hover:bg-red-500 transition duration-300",
									loading && "opacity-50"
								)}>
								{loading ? (
									<span className="w-8">...</span>
								) : (
									<Image
										src={isSuccess ? "/svgs/check.svg" : "/svgs/Arrow 1.svg"}
										alt="Send icon"
										width={30}
										height={30}
									/>
								)}
							</button>
						)}
					</div>
				</motion.form>
			)}
		</div>
	);
}
