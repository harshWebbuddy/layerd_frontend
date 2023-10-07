import React from "react";
import { labels, menuSections } from "@/utils/constants/objects";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
function Footer() {
	return (
		<footer className="relative">
			<div className=" text-white p-4 max-w-[1400px] mx-auto mt-14 md:mt-24">
				<div className="flex flex-col md:flex-row gap-y-10 flex-wrap justify-between">
					<div className="md:w-1/5">
						<Logo />
						<p className="text-xs text-white/80 leading-relaxed mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
							officiis tempora ab dolorem? Quod rem porro itaque iusto
							blanditiis ullam velit.
						</p>
						<button className="bg-red-600 text-sm px-4 py-2 rounded-lg mt-5">
							Explore the future
						</button>
					</div>
					<div className="flex flex-1 flex-wrap md:ml-28 gap-y-14 gap-x-4 justify-between">
						{menuSections.map((section, index) => (
							<div key={index} className="w-full min-w-[200px] max-w-fit">
								<h3 className="text-xl uppercase font-[500]">
									{section.title}
								</h3>
								<ul className="list-none mt-4">
									{section.items.map((item, itemIndex) => (
										<li key={itemIndex} className="mt-1">
											<a
												href={item.link}
												className="hover:underline hover:text-white text-white/50 text-sm">
												<span dangerouslySetInnerHTML={{ __html: item.text }} />
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="border-t border-white/20 py-10 px-4 mt-5">
				<div className="flex flex-col sm:flex-row gap-6 justify-between w-full max-w-[1400px] mx-auto">
					<div className="w-full max-w-lg">
						<p className="w-full text-sm text-white/80">
							&copy; 2023 WhopMe. All rights reserved
						</p>
					</div>
					<div className="flex w-full sm:justify-end gap-4 relative z-10">
						{labels.map((item, index) => (
							<Link
								href={item.link}
								key={index}
								className="hover:scale-110 transition duration-300 active:scale-95">
								<Image src={item.icon} alt="Icon" height={45} width={45} />
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 md:right-60 opacity-50">
				<Image
					src="/footer-bot.png"
					alt="footer-bot image"
					width={600}
					height={600}
					draggable={false}
				/>
			</div>
		</footer>
	);
}

export default Footer;
