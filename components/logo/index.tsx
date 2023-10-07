import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
	return (
		<div>
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-28"
				/>
			</Link>
		</div>
	);
}
