"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ITemplate = {
	icon: string;
	isPremium?: boolean;
	title: string;
	description: string;
};
interface Props {
	template: ITemplate;
}

export default function Card({ template }: Props) {
	const router = useRouter();
	const navigateHandler = () => {
		if(template.isPremium){
			return alert("Sorry! You need to be premium to use this feature!")
		}
		return router.push("/dashboard/main/ai-writing/blog")
	}
	return (
		<div
			onClick={navigateHandler}
			className="bg-[url('/rectangle-background-h-center.png')] bg-cover bg-center bg-no-repeat px-5 pt-6 pb-8 ring-1 ring-white/10 rounded-2xl overflow-hidden space-y-3 relative cursor-pointer">
			<Image
				src={template.icon}
				alt="logo"
				width={54}
				height={54}
				draggable={false}
			/>
			{template?.isPremium && (
				<Image
					src="/main/lock-premium.svg"
					alt="logo"
					width={20}
					height={20}
					draggable={false}
					className="absolute top-0 right-0 m-5"
				/>
			)}
			<h1 className="text-2xl font-bold">{template.title}</h1>
			<p className="text-[#B1B0B6] leading-relaxed">{template.description}</p>
		</div>
	);
}
