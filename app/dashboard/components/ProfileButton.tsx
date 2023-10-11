"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProfilePopup from "./ProfilePopup";
import clsx from "clsx";

type Props = {};

export default function ProfileButton({}: Props) {
	const isActive = true;
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const popupRef = useRef<HTMLDivElement>(null);
	const handleOutsideClick = (e: any) => {
		if (popupRef.current && !popupRef.current.contains(e.target)) {
			setIsPopupOpen(false);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.addEventListener("mousedown", handleOutsideClick);
		};
	});
	return (
		<div className="relative" ref={popupRef}>
			<div
				onClick={() => {
					isPopupOpen ? setIsPopupOpen(false) : setIsPopupOpen(true);
				}}
				className="flex items-center gap-2 hover:bg-[#30343a]/60 py-1.5 px-2 cursor-pointer rounded-full transition duration-300">
				<div className="relative">
					<div className="bg-[#7367F0] rounded-full overflow-hidden">
						<Image
							src="/main/Avatar.png"
							alt="Moon starts"
							height={32}
							width={32}
							draggable={false}
						/>
					</div>
					<div
						className={`border-2 border-white ${
							isActive ? "bg-green-500" : "bg-gray-500"
						} h-3 w-3 absolute bottom-0 right-0 rounded-full`}
					/>
				</div>
				<div
					className={clsx(
						"transition duration-300",
						isPopupOpen && "rotate-180"
					)}>
					<Image
						src="/svgs/ic_expand_more.svg"
						alt="Moon starts"
						height={25}
						width={25}
						draggable={false}
					/>
				</div>
			</div>
			{isPopupOpen && <ProfilePopup onClose={() => setIsPopupOpen(false)} />}
		</div>
	);
}
