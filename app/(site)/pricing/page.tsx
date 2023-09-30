import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Pricing() {
	return (
		<div>
			<div className="bg-[url('/background-image.png')] w-full h-[50vh] bg-center bg-no-repeat bg-cover">
				<div className="w-full h-full flex flex-col justify-center items-center gap-5">
					<h1 className="text-center uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
						Choose A pricing plan
					</h1>
					<p className="max-w-3xl text-white/80 leading-relaxed text-center">
						We are a passionate team of AI enthusiasts, engineers, and
						innovators who are deeply commited to democratizing AI. Our platform
						is a testament to our belief in the democratizing of technology
					</p>
					<button className="px-6 py-2 border border-white/50 rounded-xl hover:bg-gray-800/50 transition duration-500">
						Contact Us
					</button>
				</div>
			</div>
			<div className="max-w-[1300px] mx-auto p-2 sm:p-4">
				<div className="mt-20">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
						<div className="p-[3px] bg-gradient-to-b from-[#4B4B4B] to-[black] rounded-xl max-w-[500px] min-h-[560px] sm:min-h-max">
							<div className="bg-gradient-to-b from-[#242424] to-black h-full p-7 rounded-xl flex flex-col justify-between">
								<div>
									<div className="flex items-center gap-6 border-b border-[#454545] pb-6">
										<div className="border border-[#3BF5BD] p-3 rounded-lg">
											<Image
												src="/star 1.svg"
												alt="Star"
												width={32}
												height={32}
											/>
										</div>
										<div className="">
											<h1 className="text-[#FFFFFFCC] font-semibold">
												Starter
											</h1>
											<p className="flex text-[32px] h-10 gap-1 font-extrabold text-primary-red">
												<span className="self-start text-[12px] mt-2 font-semibold">
													$
												</span>
												0
												<span className="self-end text-[12px] font-medium text-[#FFFFFFCC]">
													/month
												</span>
											</p>
										</div>
									</div>
									<div className="p-6">
										<ul className="space-">
											<li className="list-disc text-[#FFFFFFCC]">
												Free e-book for every class
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Materials update every day
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Free download material videos
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Unlock 5 material videos
											</li>
										</ul>
									</div>
								</div>
								<button className="capitalize mt-6 opacity-50 text-primary-red font-semibold w-full py-3 border border-primary-red rounded-lg hover:bg-primary-red/[0.05] transition duration-300">
									Your current package
								</button>
							</div>
						</div>
						<div className="p-[3px] bg-gradient-to-b from-[#4B4B4B] to-[black] rounded-xl max-w-[500px] min-h-[560px] sm:min-h-max">
							<div className="bg-gradient-to-b from-[#242424] to-black h-full p-7 rounded-xl flex flex-col justify-between">
								<div>
									<div className="flex items-center gap-6 border-b border-[#454545] pb-6">
										<div className="border border-[#3BA7F5] p-1.5 rounded-lg">
											<Image
												src="/key 1.svg"
												alt="Star"
												width={45}
												height={45}
											/>
										</div>
										<div className="">
											<h1 className="text-[#FFFFFFCC] font-semibold">
												Explorer
											</h1>
											<p className="flex text-[32px] h-10 gap-1 font-extrabold text-primary-red">
												<span className="self-start text-[12px] mt-2 font-semibold">
													$
												</span>
												75
												<span className="self-end text-[12px] font-medium text-[#FFFFFFCC]">
													/month
												</span>
											</p>
										</div>
									</div>
									<div className="p-6">
										<ul className="space-">
											<li className="list-disc text-[#FFFFFFCC]">
												Free e-book for every class
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Materials update every day
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Free download material videos
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Meeting 2 times a week
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Unlock 15 material videos
											</li>
										</ul>
									</div>
								</div>
								<button className="capitalize mt-6 text-primary-red font-semibold w-full py-3 border border-primary-red rounded-lg hover:bg-primary-red/[0.05] transition duration-300">
									Buy Express
								</button>
							</div>
						</div>
						<div className="relative p-1 bg-gradient-to-b from-primary-red to-primary-yellow rounded-xl max-w-[500px] min-h-[560px] sm:min-h-max">
							<div className="bg-[url('/rectangle.svg')] h-52 w-28 bg-no-repeat absolute top-1 right-1 rounded-xl">
								<p className="transform rotate-[35deg] translate-y-8 translate-x-12">
									Popular
								</p>
							</div>
							<div className="bg-gradient-to-b from-[#242424] to-black h-full p-7 rounded-xl flex flex-col justify-between">
								<div>
									<div className="flex items-center gap-6 border-b border-[#454545] pb-6">
										<div className="border border-[#F6844B] p-3 rounded-lg">
											<Image
												src="/crown 1.svg"
												alt="Star"
												width={32}
												height={32}
											/>
										</div>
										<div className="">
											<h1 className="text-[#FFFFFFCC] font-semibold">Pro</h1>
											<p className="flex text-[32px] h-10 gap-1 font-extrabold text-primary-red">
												<span className="self-start text-[12px] mt-2 font-semibold">
													$
												</span>
												115
												<span className="self-end text-[12px] font-medium text-[#FFFFFFCC]">
													/month
												</span>
											</p>
										</div>
									</div>
									<div className="p-6">
										<ul className="premium">
											<li className="list-disc text-[#FFFFFFCC]">
												Free e-book for every class
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Materials update every day
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Free download material videos
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Private chat with mentor
											</li>

											<li className="list-disc text-[#FFFFFFCC]">
												Meeting 3 times a week
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Unlock up to 30 material videos
											</li>
											<li className="list-disc text-[#FFFFFFCC]">
												Unlimited saved class
											</li>
										</ul>
									</div>
								</div>
								<button className="capitalize mt-6 text-white font-semibold w-full py-3 bg-gradient-to-r from-primary-red to-primary-yellow rounded-lg hover:bg-primary-red/[0.05] transition duration-300">
									Your current package
								</button>
							</div>
						</div>
					</div>
					<p className="mt-10 opacity-80">
						Want access to enterprise features like more credits, unlimited
						LinkedIn, user permissions, and more? Email us at{" "}
						<Link href={"#"} className="text-primary-yellow">info@whopme.com</Link>
					</p>
				</div>
				<div className=" mt-20">
					<div>
						<h1 className="uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
							Side - by - Side rundown 👇
						</h1>
					</div>
					<div>{/* ask bing ai */}</div>
				</div>
			</div>
		</div>
	);
}
