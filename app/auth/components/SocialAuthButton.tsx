"use client"

import Image from "next/image";
import React from "react";

interface Props {
	image: string;
	onClick?: () => void;
	title: string;
}

export default function SocialAuthButton({ image, onClick, title }: Props) {
	const clickHandler = () => {
		if (onClick) return onClick();
	};
	return (
		<button onClick={() => clickHandler} className="w-full flex gap-3 items-center bg-neutral-800/50 py-3 px-4 hover:bg-neutral-800/90 transition duration-500 rounded-lg">
			<Image src={image} alt="Social_auth_button" width={22} height={22} />
			<span className="capitalize whitespace-nowrap">{title}</span>
		</button>
	);
}
