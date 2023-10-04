"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
interface Props {
	onClose: () => void;
}
export default function SubscriptionRequest({ onClose }: Props) {
	const popupRef = useRef<HTMLFormElement>(null);
	const handleOutsideClick = (e: any) => {
		if (popupRef.current && !popupRef.current.contains(e.target)) {
			onClose();
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.addEventListener("mousedown", handleOutsideClick);
		};
	});
	return (
		<form className="absolute bg-[#323232] rounded-2xl shadow-2xl shadow-white/10 p-10 z-50 right-0 w-[400px] top-14 space-y-6">
			<h1 className="flex text-lg font-bold gap-3">
				<Image
					src="/svgs/icon-bell (1).svg"
					alt="Bell Icon"
					width={20}
					height={20}
					draggable={false}
				/>
				Subscribe to updates
			</h1>
			<p className="text-xs mt-2 text-white/50">
				Subscribe to receive emails everytime WhopMe publishes an update.
			</p>
			<label htmlFor="user-email" className="">
				Email
			</label>
			<input
				type="email"
				name="email"
				id="user-email"
				className="bg-[#282828] py-4 w-full px-3 text-sm"
				placeholder="example@email.com"
			/>
			<button className="bg-[#3BD671] uppercase text-sm text-black w-full py-4 rounded-md">Subscribe</button>
		</form>
	);
}
