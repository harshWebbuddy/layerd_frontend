"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

export default function ProfileDetail() {
	const dummyProfile = {
		full_name: "Sheraz Ahmed",
		email: "sherazahmed@gmail.com",
		referral_ID: "DVXE8UDTAQHOODD",
		job_role: "UX/UI Designer",
		company: "XYZ",
		website: "sherazahmed.com",
		city: "Lahore",
		country: "Pakistan",
		phone: "+92 320 40440 14",
	};
	const path = usePathname();
	if (path !== "/dashboard/account") return;
	return (
		<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg px-4 sm:px-6 pt-6 pb-3">
			<h1 className="capitalize text-xl text-primary-yellow font-semibold">
				Personal Details
			</h1>
			<div className="bg-gradient-to-r from-[#FFFFFF00] via-[#ffffff62] to-[#ffffff00] h-[2px] w-full my-4" />

			{Object.entries(dummyProfile).map(([key, value], index, entries) => (
				<div
					key={key}
					className={clsx(
						" flex gap-2 py-3",
						index !== entries.length - 1 ? "border-b border-white/10 " : ""
					)}>
					<h1 className="capitalize font-semibold">{key.split("_").join(" ")}:</h1>
					<h2>{value}</h2>
				</div>
			))}
		</div>
	);
}
