"use client";

import React from "react";
import { useRouter } from "next/navigation";
export default function NavigationButton({
	children,
	styleClass,
	link,
}: {
	children: React.ReactNode;
	styleClass: string;
	link: string;
}) {
	const router = useRouter();
	return (
		<button onClick={() => router.push(link)} className={styleClass}>
			{children}
		</button>
	);
}
