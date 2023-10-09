import Image from "next/image";
import React from "react";
import SideNavItem from "./SideNavComponent";

export default function Sidebar() {
	return (
		<div className="w-1/5 max-w-[300px] bg-[#1D1D1D] h-full min-h-screen sticky top-0 border-right-gradient p-4 overscroll-y-auto overflow-y-auto">
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
			<SideNavItem/>
		</div>
	);
}
