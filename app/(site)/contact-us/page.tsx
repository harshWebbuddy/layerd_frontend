import React from "react";
import Card from "./components/Card";
import { cardData } from "./constants";
import Image from "next/image";
import { awards } from "../about/components/constants/Awards";
import { labels } from "@/utils/constants/objects";
import Link from "next/link";
import SalesForm from "./components/SalesContactForm";

export default function ContactPage() {
	return (
		<main>
			<div className="w-full h-[50vh] relative">
				<div className="bg-[#0a0a0e]/90 absolute inset-0 z-[-1]" />
				<video
					className="w-full h-full absolute inset-0 object-cover z-[-2]"
					loop={true}
					autoPlay={true}>
					<source
						src="/video/-1af2-4fbf-b389-3d379703d080.mp4"
						type="video/mp4"
					/>
				</video>
				<div className="bg-gradient-to-b from-transparent to-[#16161b] h-40 absolute bottom-0 w-full z-1" />
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
						Contact Us
					</h1>
					<p className="text-center max-w-lg text-white/80">
						We are here to answer all your queries. Get in touch and the right
						team will get back to you in the next 2 hours.
					</p>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto p-3 sm:p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
					{cardData.map((item, index) => (
						<Card item={item} key={index} />
					))}
				</div>
				<div className="mt-20">
					<div>
						<div>
							<Image
								src="/slash.png"
								alt="Slashes"
								height={100}
								width={600}
								draggable={false}
								className="w-[900px] h-[70px] absolute left-0 -translate-y-3"
							/>
							<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
								OUR CLIENTS
							</h1>
							<Image
								src="/slash.png"
								alt="Slashes"
								height={100}
								width={600}
								draggable={false}
								className="w-[900px] h-[70px] absolute right-0 -translate-y-12 hidden 2xl:block"
							/>
						</div>
						<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-20">
							{awards.slice(0, 14).map((item) => (
								<Image src={item} alt="Icon" width={150} height={100} />
							))}
						</div>
					</div>
				</div>
				<div className="mt-20 bg-[url('/background-rectangle-c-us.png')] bg-no-repeat bg-cover bg-center rounded-xl ">
					<div className="flex flex-col md:flex-row w-full items-center h-fit p-5 sm:py-12 sm:px-20 gap-6">
						<h1 className="relative mt-4 capitalize w-full mb-2 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Don't forget to join us on social media
						</h1>
						<div className="flex gap-4">
							{labels.map((item, index) => (
								<Link
									href={item.link}
									key={index}
									className="hover:scale-110 transition duration-300 active:scale-95">
									<div className="ring-1 ring-white rounded-full p-1.5">
										<Image src={item.icon} alt="Icon" height={30} width={30} />
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
