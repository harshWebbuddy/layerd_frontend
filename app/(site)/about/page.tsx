import React from "react";
import Reviews from "./components/Reviews";
import Image from "next/image";
import Products from "./components/Products";
import Rating from "./components/Rating";

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
								Unlocking Ai's potential, mutliple tool at a time
							</h1>
							<p className="text-sm text-gray-300 mt-6 leading-relaxed max-w-4xl md:text-center">
								We are a passionate team of AI enthusiasts, engineers, and
								innovators who are deeply committed to democratizing AI. Our
								platform is a testament to our belief in the democratization of
								technology. We understand that AI can be intimidating, but it
								doesn't have to be. We strive to simplify the AI landscape and
								make it accessible to individuals and organizations of all
								sizes.
							</p>
							<button className="bg-transparent ring-1 ring-inset ring-gray-300 py-3 w-32 rounded-xl mt-4 hover:bg-neutral-700/30 transition">
								Contact us
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[1400px] mx-auto">
				<div className="px-3 sm:px-4">
					<div className="mt-10 xl:m-0 flex flex-col gap-10">
						<div className="flex flex-col md:flex-row justify-center items-center gap-4 xl:gap-0">
							<div className="w-full flex flex-col gap-6">
								<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
									Why we started?
								</h1>
								<h2 className="text-xl">And it's only the beginning!</h2>
								<p className="text-gray-200">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
									eum, ea dolorum porro velit, laborum et aperiam consequatur
									impedit quae exercitationem sint sunt cumque in. Voluptatem ut
									sit possimus adipisci?
								</p>
								<p className="text-gray-400 text-sm leading-relaxed">
									Now we're going beyond any boundaries or patterns. We're
									creating seamless exciting attractions for your guests by
									mixing technology with fun group experiences and storytelling.
								</p>
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
								<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text">
									How we started?
								</h1>
								<h2 className="text-xl">And it's only the beginning!</h2>
								<p className="text-gray-200">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
									eum, ea dolorum porro velit, laborum et aperiam consequatur
									impedit quae exercitationem sint sunt cumque in. Voluptatem ut
									sit possimus adipisci?
								</p>
								<p className="text-gray-400 text-sm leading-relaxed">
									Now we're going beyond any boundaries or patterns. We're
									creating seamless exciting attractions for your guests by
									mixing technology with fun group experiences and storytelling.
								</p>
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
					<div className="mt-10 md:mt-20 ring-2 p-5 pb-10 md:py-14 md:px-28 ring-gray-400/60 bg-neutral-700/20 backdrop-blur-md rounded-3xl">
						<div className="flex flex-col md:flex-row gap-4">
							<div className="w-full">
								<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 max-w-sm font-bold text-transparent text-left bg-clip-text">
									How are we making impact?
								</h1>
							</div>
							<div className="w-full">
								<p className="tracking-tight">
									Lorem ipsum dolor sit amet consectetur. Sagittis aenean
									egestas quis commodo dolor vel in pellentesque eu. Est quisque
									dictumst cras ipsum montes ullamcorper. Molestie sed ornare.
								</p>
							</div>
						</div>
						<Products />
					</div>
					<Rating />
					<Reviews />
				</div>
			</div>
		</div>
	);
}
