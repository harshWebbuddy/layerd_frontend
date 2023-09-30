"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Logo from "@/components/logo";

const ImageFlipper = ({ images }: { images: string[] }) => {
	return (
		<div className="w-full">
			<div className="flex items-center justify-center">
				<div className="relative">
					<Swiper
						effect={"cards"}
						grabCursor={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[EffectCards, Autoplay]}
						className="mySwiper">
						{images.map((image, index) => (
							<SwiperSlide>
								<div className="relative w-[500px] h-[650px]" key={index}>
									<span className="absolute z-50 top-3 left-3">
										<Logo />
									</span>
									<Image
										src={image}
										alt={`Image ${index + 1}`}
										objectFit="cover"
										fill
										className="w-full h-full object-cover"
									/>
									<span className="text-xs font-semibold absolute bottom-3 left-3 text-[#AFAFAF]">Art Created by Midjourney</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ImageFlipper;
