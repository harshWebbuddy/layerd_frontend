"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
	isOpen : boolean
	onClose: () => void;
};

export default function Popup({ onClose, isOpen }: Props) {
	const popupRef = useRef<HTMLDivElement | null>(null);

	const handleOutsideClick = (e: MouseEvent) => {
		if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			handleOutsideClick(e);
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose]);

	const subMenuAnimate = {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
	return (
		<motion.div
			initial="exit"
			animate={isOpen ? "enter" : "exit"}
			variants={subMenuAnimate}
			ref={popupRef}
			className="absolute bg-[url('/background-image-uploads.png')] bg-center bg-no-repeat bg-cover rounded-2xl ring-1 ring-slate-700 ring-inset w-[350px] h-full min-h-[400px] bg-opacity-40 backdrop-blur-md p-4 right-0 z-50">
			<div className="flex flex-col h-full">
				<div className="flex-1 h-full space-y-4">
					<input
						className="bg-[#323232] ring-1 ring-[#514E4E] w-full h-12 rounded-lg p-2 outline-none focus:ring-[#928e8e]"
						placeholder="Search for a brain"
					/>
					<div className="flex items-center gap-2">
						<Image src="/main/check.svg" alt="check" width={25} height={25} />
						<p>Default Brain</p>
					</div>
				</div>
				<div className="flex justify-end">
					<button className="flex gap-2 bg-gradient-to-r from-primary-red to-primary-yellow p-2.5 rounded-md items-center">
						<Image src="/main/add.svg" alt="add" width={20} height={20} />
						<span>Add New Brain</span>
					</button>
				</div>
			</div>
		</motion.div>
	);
}
