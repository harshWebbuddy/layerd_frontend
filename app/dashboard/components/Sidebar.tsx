import Image from "next/image";
import React from "react";
import { navObjecs } from "../main/components/constants";

export default function Sidebar() {
	return (
		<div className="w-1/5 max-w-[350px] bg-[#1D1D1D] h-full min-h-screen sticky top-0 border-right-gradient p-4">
			<div>
				<Image
					src="/logo.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-36"
				/>
			</div>
			<div className="space-y-3 mt-10">
				{navObjecs.map((item, index) => (
					<div
						key={index}
						className="flex gap-4 hover:bg-[#323232] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer p-2 items-center transition duration-200">
						<Image
							src={item.icon}
							alt="Icon"
							width={200}
							height={100}
							draggable={false}
							className="w-8"
						/>
						<p>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}
