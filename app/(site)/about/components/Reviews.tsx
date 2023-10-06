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
		<div className="relative reviews mt-10">
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
								className={`w-full h-[500px] sm:h-[600px] bg-center rounded-3xl md:rounded-[50px] relative px-3 py-10 sm:p-10 lg:px-28 lg:py-20 overflow-hidden`}>
								<Image
									src={item.image}
									alt="Image"
									fill
									className="object-cover !w-full !h-full absolute inset-0"
								/>
								<div className="bg-black opacity-70 absolute inset-0" />
								<div className="before:content-quotes relative z-50 w-full">
									<Image
										src="/svgs/quotes.svg"
										alt="Image"
										width={70}
										height={70}
										className="w-10 h-10 sm:h-auto sm:w-auto"
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
										className="max-w-xl text-lg sm:text-xl font-normal mt-5 leading-normal md:leading-loose">
										{item.testimonial}
									</motion.p>
									<div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center mt-14 sm:mt-40">
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
													className="w-10 h-10 sm:h-auto sm:w-auto"
												/>
												<span className="font-semibold text-lg sm:text-2xl">Watch video</span>
											</button>
										</motion.div>
										<div className="w-full flex flex-col md:items-end">
											<h1 className="text-xl sm:text-3xl text-white leading-relaxed font-semibold">
												{item.name}
											</h1>
											<p className="text-[#D8D8D8] text-md sm:text-xl font-medium whitespace-nowrap">{item.role}</p>
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
