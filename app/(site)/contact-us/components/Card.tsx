"use client";

import Image from "next/image";
import React, { useState } from "react";
import SalesContactForm from "./SalesContactForm";
import PartnershipRequestForm from "./PartnershipRequestForm";
interface Item {
	icon: string;
	title: string;
	description: string;
}
interface IProps {
	item: Item;
}
export default function Card({ item }: IProps) {
	const [isSalesFormOpen, setIsSalesFormOpen] = useState(false);
	const [patnershipFormOpen, setPatnershipFormOpen] = useState(false);
	const handleToggle = (toggle: string) => {
		if (toggle.toLowerCase() === "sales" || "chat") {
			setIsSalesFormOpen(true);
		}
		if (toggle.toLowerCase() === "partnership") {
			setPatnershipFormOpen(true);
		}
	};
	return (
		<div className="bg-[url('/rectangle-background-h-center.png')] bg-cover bg-center py-8 px-6 rounded-2xl space-y-3 cursor-pointer flex flex-col items-center justify-center">
			<Image src={item.icon} alt="Icon" width={30} height={30} />
			<h1 className="text-lg font-semibold">{item.title}</h1>
			<p className="text-sm text-[#D7D7D7] max-w-xs text-center">
				{item.description}
			</p>
			<button
				onClick={() => handleToggle(item.title)}
				className="capitalize bg-gradient-to-r from-primary-red to-primary-yellow py-2 px-4 rounded-lg">
				Talk to us
			</button>
			<SalesContactForm
				isOpen={isSalesFormOpen}
				onClose={() => setIsSalesFormOpen(false)}
			/>
			<PartnershipRequestForm
				isOpen={patnershipFormOpen}
				onClose={() => setPatnershipFormOpen(false)}
			/>
		</div>
	);
}
