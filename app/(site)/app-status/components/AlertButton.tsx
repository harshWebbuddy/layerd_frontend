"use client";
import Image from "next/image";
import React, { useState } from "react";
import SubscriptionRequest from "./SubscriptionRequest";

export default function AlertButton() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	return (
		<div className="relative">
			<button className="bg-[#3BD671] p-3 rounded-lg" onClick={() => setIsPopupOpen(true)}>
				<Image
					src="/svgs/icon-bell.svg"
					alt="Bell Icon"
					width={20}
					height={20}
					draggable={false}
				/>
			</button>
			{isPopupOpen && (
				<SubscriptionRequest onClose={() => setIsPopupOpen(false)} />
			)}
		</div>
	);
}
