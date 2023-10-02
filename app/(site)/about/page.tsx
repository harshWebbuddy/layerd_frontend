import React from "react";
import Reviews from "./components/Reviews";
import Image from "next/image";
import Products from "./components/Products";
import Awards from "./components/Awards";

export default function About() {
	return (
		<div>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
						<div className="w-full flex flex-col items-start md:items-center justify-center">
							<h2 className="bg-gradient-to-r text-2xl font-bold from-primary-yellow to-primary-red tracking-tight text-transparent md:text-center bg-clip-text">
								About WoopMe
							</h2>
							<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent md:text-center bg-clip-text">
								Ai For Everyone , Ai for Everything
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="px-3 sm:px-4">
				<div className="mt-20 max-w-[1400px] mx-auto">
					<div className="flex flex-col gap-10">
						<div className="flex flex-col md:flex-row justify-center items-center gap-4 xl:gap-0">
							<div className="w-full flex flex-col gap-3">
								<Image
									src="/slash.png"
									width={600}
									height={300}
									alt="Slashes"
									className="absolute left-0 w-[400px] h-[60px] -translate-y-2"
								/>
								<h1 className="relative z-10 uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
									Why we started?
								</h1>
								<h2 className="text-xl mt-6">And it's only the beginning!</h2>
								<p className="text-gray-200 font-[500] leading-relaxed text-[16px]">
									"Born out of a passion for technology and a vision for a
									future powered by Artificial Intelligence, WhopMe.com began
									its journey.
								</p>
								<div className="flex flex-col gap-6">
									<p className="text-white/60 text-[15px] leading-relaxed">
										Our founders, a diverse group of innovators, tech
										enthusiasts, and dreamers, recognized the transformative
										potential of AI. However, they also saw a gap - AI
										technology was largely confined to tech giants and not
										easily accessible or understandable to the average
										individual or small businesses.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										This realization sparked an idea - what if there was a
										platform that could democratize access to AI? A platform
										that could bring AI's power to everyone, regardless of their
										technical expertise or resources? This question was the
										genesis of WhopMe.com.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										We started WhopMe.com with a mission to break down the
										barriers to AI. Our goal was to create a single platform
										that houses various AI tools - from AI search engines and AI
										chats to AI coding and personalized AI services - all
										designed to be user-friendly and effective.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										The journey wasn't easy. It took countless hours of
										research, development, testing, and refining to bring our
										vision to life. But seeing our platform empower individuals
										and businesses, making their lives easier and their
										operations more efficient, has made it all worthwhile. 
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										Today, WhopMe.com stands as a testament to our belief that
										AI should be for everyone and everything. And as we look to
										the future, we remain committed to innovating, expanding,
										and improving our platform, ensuring that we continue to
										bring the power of AI into the hands of those who need it
										most."
									</p>
								</div>
							</div>
							<div className="w-full">
								<Image
									src="/gifs/animated-hand.gif"
									alt="bot"
									width={600}
									height={600}
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 xl:gap-0">
							<div className="w-full flex flex-col gap-6">
								<Image
									src="/slash.png"
									width={800}
									height={300}
									alt="Slashes"
									className="absolute right-0 h-[60px] -translate-y-3"
								/>
								<h1 className="relative z-10 uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
									How we started?
								</h1>
								<div className="flex flex-col gap-6">
									<p className="text-white/60 text-[15px] leading-relaxed">
										Our founders, a diverse group of innovators, tech
										enthusiasts, and dreamers, recognized the transformative
										potential of AI. However, they also saw a gap - AI
										technology was largely confined to tech giants and not
										easily accessible or understandable to the average
										individual or small businesses.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										This realization sparked an idea - what if there was a
										platform that could democratize access to AI? A platform
										that could bring AI's power to everyone, regardless of their
										technical expertise or resources? This question was the
										genesis of WhopMe.com.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										We started WhopMe.com with a mission to break down the
										barriers to AI. Our goal was to create a single platform
										that houses various AI tools - from AI search engines and AI
										chats to AI coding and personalized AI services - all
										designed to be user-friendly and effective.
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										The journey wasn't easy. It took countless hours of
										research, development, testing, and refining to bring our
										vision to life. But seeing our platform empower individuals
										and businesses, making their lives easier and their
										operations more efficient, has made it all worthwhile. 
									</p>
									<p className="text-white/60 text-[15px] leading-relaxed">
										Today, WhopMe.com stands as a testament to our belief that
										AI should be for everyone and everything. And as we look to
										the future, we remain committed to innovating, expanding,
										and improving our platform, ensuring that we continue to
										bring the power of AI into the hands of those who need it
										most."
									</p>
								</div>
							</div>
							<div className="w-full">
								<Image
									src="/gifs/animated-bot.gif"
									alt="bot"
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[url('/awards/award-background.png')] bg-left bg-transparent">
					<div className="max-w-[1400px] mx-auto">
						<Image
							src="/slash.png"
							width={600}
							height={300}
							alt="Slashes"
							className="absolute left-0 w-[500px] h-[80px] translate-y-16 z-0"
						/>
						<div className="mt-10 md:mt-20 ring-2 p-5 pb-10 md:py-14 md:px-28 ring-gray-400/60 bg-neutral-700/20  rounded-3xl relative z-10">
							<div className="flex flex-col md:flex-row gap-4">
								<div className="w-full">
									<h1 className="relative z-20 uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 max-w-sm font-bold text-transparent text-left bg-clip-text">
										How are we making impact?
									</h1>
								</div>
								<div className="w-full">
									<p className="tracking-tight">
										At WhopMe.com, we are revolutionizing the way individuals
										and businesses interact with technology. Our platform is
										making significant impacts in various ways
									</p>
								</div>
							</div>
							<Products />
							<p className="mt-10">
								At WhopMe.com, our impact is about more than just providing a
								platform; it's about changing the perception of AI, making it a
								tool for everyone to use, learn from, and innovate with.
							</p>
						</div>
						<Awards />
					</div>
				</div>
				<div className="max-w-[1400px] mx-auto mt-20">
					<Image
						src="/slash.png"
						width={600}
						height={300}
						alt="Slashes"
						className="absolute left-0 w-[400px] h-[80px] -translate-y-2"
					/>
					<div className="flex items-center relative z-10">
						<div className="w-full">
							<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 max-w-sm font-bold text-transparent text-left bg-clip-text">
								Rating & Reviews
							</h1>
						</div>
						<div className="w-full">
							<p className="tracking-tight leading-tight text-white/80">
								Lorem ipsum dolor sit amet consectetur. Sagittis aenean egestas
								quis commodo dolor vel in pellentesque eu.
							</p>
						</div>
					</div>
					<Reviews />
				</div>
			</div>
		</div>
	);
}
