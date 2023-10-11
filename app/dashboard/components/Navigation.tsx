import Image from "next/image";
import React from "react";
import ProfileButton from "./ProfileButton";

export default function Navigation() {
	return (
		<nav className="m-5 p-3">
			<div className="flex justify-between">
				<div className="space-y-3">
					<h1 className="text-[23px] font-semibold">Hi, Sheraz Ahmed</h1>
					<p className="text-sm capitalize">Welcome to world of AI</p>
				</div>
				<div className="flex gap-6 items-center">
					<div className="cursor-pointer">
						<Image
							src="/svgs/moon-stars.svg"
							alt="Moon starts"
							height={25}
							width={25}
							draggable={false}
						/>
					</div>
					<div className="relative cursor-pointer">
						<Image
							src="/svgs/bell.svg"
							alt="Moon starts"
							height={25}
							width={25}
							draggable={false}
						/>
						<div className="absolute -top-2 -right-2 bg-[#EA5455] w-5 h-5 rounded-full grid place-content-center text-xs">
							4
						</div>
					</div>
					<ProfileButton/>
				</div>
			</div>
		</nav>
	);
}
