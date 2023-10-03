"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { reviews } from "./constants/Reviews";
import SlideButtons from "./SlideButtons";

interface Props {}

export default function Reviews({}: Props) {
	return (
		<div className="relative">
			<Swiper
				spaceBetween={30}
				effect={"fade"}
				loop={true}
				navigation={{
					nextEl: ".button-next-slide",
					prevEl: ".button-prev-slide",
				}}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className="!w-full">
				{reviews.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div
								className={`w-full h-[600px] bg-center rounded-xl md:rounded-[50px] relative p-4 md:px-28 py-20 overflow-hidden mt-10`}>
								<Image
									src={item.image}
									alt="Image"
									height={600}
									width={400}
									className="object-cover !w-full !h-full absolute inset-0"
								/>
								<div className="bg-black opacity-70 absolute inset-0" />
								<div className="before:content-quotes relative z-50 w-full">
									<Image
										src="/svgs/quotes.svg"
										alt="Image"
										width={70}
										height={70}
									/>
									<motion.p
										initial="hidden"
										whileInView="visible"
										viewport={{ once: false, amount: 0.5 }}
										transition={{ duration: 0.1 }}
										variants={{
											hidden: { opacity: 0, x: -5 },
											visible: { opacity: 1, x: 0 },
										}}
										className="max-w-2xl text-lg mt-10 leading-relaxed">
										{item.testimonial}
									</motion.p>
									<div className="flex flex-col md:flex-row justify-between items-center mt-28 sm:mt-40">
										<motion.div
											initial="hidden"
											whileInView="visible"
											viewport={{ once: false, amount: 0.5 }}
											transition={{ duration: 0.1 }}
											variants={{
												hidden: { opacity: 0, x: -5 },
												visible: { opacity: 1, x: 0 },
											}}
											className="flex items-center gap-2 w-full cursor-pointer">
											<button className="flex items-center gap-5">
												<Image
													src={"/svgs/play.svg"}
													alt="play"
													height={60}
													width={60}
												/>
												<span className="font-bold text-xl">Watch video</span>
											</button>
										</motion.div>
										<div className="w-full flex flex-col md:items-end">
											<h1 className="text-3xl text-white leading-relaxed font-semibold">
												{item.name}
											</h1>
											<p className="text-[#D8D8D8] text-lg">{item.role}</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<SlideButtons />
		</div>
	);
}
