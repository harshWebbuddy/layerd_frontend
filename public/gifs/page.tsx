"use client";
import ContentBox from "@/components/ContentBox";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Form from "@/components/client/Form";
import { motion } from "framer-motion";
import {
	AiPersonaObject,
	ImageAiOptions,
	botOptions,
	codeOptions,
	voiceOptions,
	writingOptions,
} from "@/utils/objects";
import Image from "next/image";
import BoxComponent from "@/components/BoxComponent";
import Tools from "@/components/Tools";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.5 },
	},
};
const childVariant = {
	hidden: { opacity: 0, x: -15 },
	visible: { opacity: 1, x: 0 },
};

export default function Home() {
	return (
		<main>
			<div className="bg-[url('/background-image.png')] bg-cover h-[80vh] bg-center">
				<Navbar />
				<Hero />
			</div>
			<div id="ai-search" className="mt-20 px-2 sm:px-4">
				<div className="w-full flex items-center flex-col">
					<div className="absolute h-[300px] w-[600px] bg-orange-700 -left-[800px] blur-[300px] rounded-full" />
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Ai search engine
					</h1>
					<p className="text-sm text-gray-300 text-center max-w-3xl mt-6 leading-relaxed">
						Lorem ipsum dolor sit amet consectetur. Pharetra fringilla in quam
						est faucibus. Egestas condimentum elementum lacus porttitor. In
						turpis gravida gravida dolor. A odio.
					</p>
				</div>
				<video
					controls
					className="w-full max-w-[1000px] mx-auto shadow-2xl shadow-neutral-800 mt-6 rounded-2xl ring-1 ring-inset ring-neutral-700">
					<source
						src="https://www.youtube.com/watch?v=qCR9EZdoj5I"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="max-w-[1400px] mx-auto px-2 sm:px-4">
				<div id="ai-bots"  className="mt-28 relative">
					<div className="absolute h-[600px] w-[300px] bg-blue-700 -right-[700px] blur-[200px]" />
					<div className="flex flex-col-reverse md:flex-row mb-4">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={container}
							className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
							{botOptions.slice(0, 2).map((option, index) => (
								<BoxComponent option={option} index={index} />
							))}
						</motion.div>
						<div className="w-full h-72 relative">
							<Image
								src="/process.gif"
								alt="process-image"
								fill
								objectFit="cover"
							/>
						</div>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={container}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
						{botOptions.slice(2).map((option, index) => (
							<BoxComponent option={option} index={index} />
						))}
					</motion.div>
					<div className="flex justify-center mt-5">
						<button className="px-6 py-3 bg-primary-red rounded-xl">
							Explore AI ChatBots
						</button>
					</div>
				</div>
				<div id="ai-images"  className="mt-32 relative">
					<div className="absolute h-[600px] w-[300px] bg-green-700 -left-[700px] blur-[250px]" />
					<div className="flex flex-col md:flex-row gap-20">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.3 }}
							variants={{
								hidden: { opacity: 0, scale: 0.7, x: -100 },
								visible: { opacity: 1, scale: 1, x: 0 },
							}}
							className="h-96 md:h-auto w-full relative">
							<Image
								src="/man-visualization.gif"
								alt="visualization"
								objectFit="cover"
								fill
								className="rounded-3xl"
							/>
						</motion.div>
						<div className="w-full">
							<div className="w-full flex items-center gap-3">
								<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
									Ai images
								</h1>
								<div className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
							</div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={container}
								className="w-full grid grid-rows-1 md:grid-cols-2 gap-4 mt-10">
								{ImageAiOptions.map((option, index) => (
									<BoxComponent option={option} index={index} />
								))}
							</motion.div>
						</div>
					</div>
					<div className="mt-10 flex gap-20">
						<div className="w-full" />
						<div className="w-full">
							<button className="text-sm font-semibold hover:bg-gray-600/10 transition ring-1 ring-gray-200 px-4 py-3 rounded-lg">
								Explore AI Images Tools
							</button>
						</div>
					</div>
				</div>
				<div id="ai-writing"  className="mt-28 relative">
					<div className="absolute h-[1000px] w-[300px] bg-teal-700 -right-[700px] blur-[250px]" />
					<div className="w-full flex items-center gap-3 mt-4 md:mb-10">
						<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Ai writing
						</h1>
						<div className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
					</div>

					<div className="flex flex-col-reverse lg:flex-row gap-10">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={container}
							className="grid grid-cols-1 sm:grid-cols-2 gap-5">
							{writingOptions.slice(0, 2).map((option, index) => (
								<BoxComponent option={option} index={index} />
							))}
						</motion.div>
						<video
							controls
							className="w-full md:max-w-[500px] shadow-2xl shadow-neutral-800 mt-6 rounded-2xl ring-1 ring-inset ring-neutral-700">
							<source
								src="https://www.youtube.com/watch?v=qCR9EZdoj5I"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={container}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
						{writingOptions.slice(2).map((option, index) => (
							<BoxComponent option={option} index={index} />
						))}
					</motion.div>
					<div className="w-full flex justify-center mt-10">
						<button className="text-sm font-semibold hover:bg-gray-600/10 transition ring-1 ring-gray-200 px-4 py-3 rounded-lg">
							Explore AI Writing Tools
						</button>
					</div>
				</div>
				<div id="ai-voice"  className="mt-28 relative">
					<div className="absolute h-[500px] w-[300px] bg-purple-700 -left-[700px] blur-[250px]" />
					<div className="w-full flex items-center gap-3 mt-4 md:mb-10">
						<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Ai Voice
						</h1>
						<div className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
					</div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
						variants={container}
						className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
						{voiceOptions.map((option, index) => (
							<ContentBox option={option} index={index} />
						))}
					</motion.div>
				</div>
				<div id="ai-codes"  className="mt-28 relative">
					<div className="absolute h-[500px] w-[200px] bg-[#cf7145] -right-[700px] blur-[250px]" />
					<div className="w-full flex items-center gap-3 mt-4 md:mb-10">
						<h1 className="uppercase text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Ai Codes
						</h1>
						<div className="h-[3px] max-w-4xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
					</div>
					<div className="flex flex-col lg:flex-row gap-14">
						<video
							controls
							className="w-full max-h-[450px] mt-20 shadow-2xl shadow-neutral-800 rounded-2xl ring-1 ring-inset ring-neutral-700">
							<source
								src="https://www.youtube.com/watch?v=qCR9EZdoj5I"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
						<div>
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={container}
								className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{codeOptions.map((option, index) => (
									<ContentBox option={option} index={index} />
								))}
							</motion.div>
							<div className="w-full mt-10">
								<button className="text-sm font-semibold hover:bg-gray-600/10 transition ring-1 ring-gray-200 px-4 py-3 rounded-lg">
									Explore AI Images Tools
								</button>
							</div>
						</div>
					</div>
				</div>
				<div id="ai-chat"  className="mt-28 relative">
					<div className="absolute h-[500px] w-[300px] bg-yellow-700 -left-[700px] blur-[250px]" />
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Ai Personalization
					</h1>
					<div className="mt-14">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={container}
							className="grid grid-cols-1 md:grid-cols-2 gap-5">
							{AiPersonaObject.slice(0, 2).map((option, index) => (
								<ContentBox option={option} index={index} />
							))}
						</motion.div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={container}
							className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
							{AiPersonaObject.slice(2).map((option, index) => (
								<ContentBox option={option} index={index} />
							))}
						</motion.div>
					</div>
				</div>
				<div id="create-yours" className="mt-28 ">
					<div className="w-full flex items-center gap-3 mt-4">
						<motion.h1
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.2 }}
							variants={{
								hidden: { opacity: 0, x: -30 },
								visible: { opacity: 1, x: 0 },
							}}
							className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Create your own gpt
						</motion.h1>
						<div className="h-[3px] max-w-xl bg-gradient-to-r from-gray-500 via-gray-700/50 to-transparent flex-1" />
					</div>
					<div className="flex flex-col md:flex-row gap-2 relative">
						<div className="absolute h-[300px] w-[600px] bg-red-700 -right-[1000px] blur-[300px]" />
						<div className="w-full flex flex-col gap-2">
							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.4 }}
								transition={{ duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: -50 },
									visible: { opacity: 1, x: 0 },
								}}
								className="max-w-xl text-gray-500 text-sm mt-10 leading-relaxed">
								Lorem ipsum dolor sit amet consectetur. Diam eu nulla
								consectetur elit sed in at vitae. Luctus orci vel lectus rhoncus
								nulla ac nec elementum. Donec arcu ac nulla elementum nunc
								rhoncus orci. Consectetur leo sit nulla nec ligula. Mattis
								mauris enim elit quam pharetra. Convallis sollicitudin malesuada
								molestie ullamcorper. Sem bibendum sodales tincidunt lacus elit
								varius. Purus a vitae posuere varius pharetra ut. Elit lorem
								pellentesque lobortis euismod magnis dignissim suspendisse
								adipiscing. Et tempus magnis.
							</motion.p>
						</div>
						<video
							controls
							className="w-full shadow-2xl shadow-neutral-800 mt-6 rounded-2xl ring-1 ring-inset ring-neutral-700">
							<source
								src="https://www.youtube.com/watch?v=qCR9EZdoj5I"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
			<div>
				<Tools />
				<div id="user-form" className="w-full flex flex-between">
					<h1 className="w-full text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Ai tools
					</h1>
					<h1 className="w-full text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Wolfram alpha
					</h1>
				</div>
			</div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
				className="my-28 relative flex justify-center items-center">
				<div className="absolute h-[120px] w-[120px] blur-3xl bg-gradient-to-br from-primary-red to-primary-yellow top-1/2 right-1/2 transform translate-x-1/2 -translate-y-[10%] " />
				<div className="max-w-5xl relative z-10 backdrop-blur-3xl bg-gradient-to-b from-transparent to-white/[0.05] w-full rounded-b-3xl flex flex-col items-center gap-2 border-b-[3px] border-white/10 py-14">
					<h1>
						<Image
							src="/emoji-hands.png"
							alt="emoji-handsup"
							width={70}
							height={70}
						/>
					</h1>
					<motion.h1
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className="text-center font-semibold text-3xl">
						Are You Ready
						<br /> For Getting Future Updates
					</motion.h1>
					<Form />
				</div>
			</motion.div>
			<Footer />
		</main>
	);
}
