import Image from "next/image";
import React from "react";

export default function Navigation() {
	const isActive = true;
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
					<div className="flex items-center gap-2 hover:bg-[#30343a]/60 py-1.5 px-2 cursor-pointer rounded-full transition duration-300">
						<div className="relative">
							<div className="bg-[#7367F0] rounded-full overflow-hidden">
								<Image
									src="/main/Avatar.png"
									alt="Moon starts"
									height={32}
									width={32}
									draggable={false}
								/>
							</div>
							<div
								className={`border-2 border-white ${
									isActive ? "bg-green-500" : "bg-gray-500"
								} h-3 w-3 absolute bottom-0 right-0 rounded-full`}
							/>
						</div>
						<div>
							<Image
								src="/svgs/ic_expand_more.svg"
								alt="Moon starts"
								height={25}
								width={25}
								draggable={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
