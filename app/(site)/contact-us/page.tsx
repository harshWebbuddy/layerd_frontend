import React from "react";
import Card from "./components/Card";
import { cardData } from "./constants";
import Image from "next/image";
import { awards } from "../about/components/constants/Awards";
import { labels } from "@/utils/constants/objects";
import Link from "next/link";

export default function ContactPage() {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] w-full h-[35vh] bg-center bg-no-repeat bg-cover">
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
			<div className="max-w-[1400px] mx-auto">
				<div className="grid grid-cols-3 gap-4 mt-14">
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
								className="w-[1000px] h-[70px] absolute left-0 -translate-y-3"
							/>
							<h1 className="relative text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
								OUR CLIENTS
							</h1>
							<Image
								src="/slash.png"
								alt="Slashes"
								height={100}
								width={600}
								className="w-[1000px] h-[70px] absolute right-0 -translate-y-12"
							/>
						</div>
						<div className="grid grid-cols-7 mt-20">
							{awards.slice(0, 14).map((item) => (
								<Image src={item} alt="Icon" width={150} height={100} />
							))}
						</div>
					</div>
				</div>
				<div className="mt-20 bg-[url('/background-rectangle-c-us.png')] bg-no-repeat bg-cover bg-center rounded-xl">
					<div className="flex w-full items-center h-[120px] sm:px-20">
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
