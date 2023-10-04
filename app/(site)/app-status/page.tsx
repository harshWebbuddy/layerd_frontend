import Image from "next/image";
import React from "react";
import StatusPercentage from "./components/StatusPercentage";
import AlertButton from "./components/AlertButton";

export default function AppStatus() {
	const status = {
		api: 99,
		webApp: 98,
		Website: 100,
	};
	return (
		<div className="mt-28 max-w-[1300px] mx-auto">
			<section className="p-3 sm:p-4">
				<div className="flex flex-col md:flex-row justify-between">
					<h1 className="capitalize text-4xl font-bold">App status</h1>
					<div className="flex gap-4 mt-10 sm:mt-auto">
						<div className="flex flex-col sm:items-end">
							<h1 className="text-lg font-bold">App status</h1>
							<p className="text-xs text-gray-400 mt-1">
								Last updated 2:09:30 AM | Next update in 03 sec.
							</p>
						</div>
						<AlertButton/>
					</div>
				</div>
				<div className="border-4 border-gray-400/30 rounded-2xl bg-gray-400/10 backdrop-blur-3xl mt-10 sm:mt-20">
					<div className="flex items-center gap-6 px-10 py-7">
						<Image
							src="/svgs/Group 1000008628.svg"
							alt="Bell Icon"
							width={80}
							height={80}
							draggable={false}
							className="hidden sm:block"
						/>
						<h1 className="text-xl md:text-2xl font-bold">
							All Systems <span className="text-[#3BD671]">Operational</span>
						</h1>
					</div>
				</div>
				<section className="mt-20">
					<div className="flex flex-col sm:flex-row justify-between">
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
							draggable={false}
						/>
						<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Uptime{" "}
							<span className="text-lg text-gray-400 font-medium">
								(Last 90 days)
							</span>
						</h1>
						<div className="flex items-center gap-2">
							<Image
								src="/svgs/calendar.svg"
								alt="Calendar"
								width={20}
								height={20}
							/>
							<p className="text-[#3BD671] underline text-xs">Calendar View</p>
						</div>
					</div>
					<div className="border-4 border-gray-400/30 rounded-2xl bg-gray-400/10 backdrop-blur-3xl mt-10 sm:mt-20 px-5 sm:px-10 md:px-20 py-8">
						<div className="border-b border-[#6e6e6e] pb-6">
							<div className="flex flex-col md:flex-row justify-between">
								<div className="flex items-center gap-3 text-lg">
									<h1>API</h1>
									<Image
										src="/svgs/icon-arrow-right.svg"
										alt="Calendar"
										width={15}
										height={15}
									/>
									<span>|</span>
									<h1 className="text-[#3BD671]">{status.api}%</h1>
								</div>
								<div className="flex items-center gap-3">
									<Image
										src="/svgs/Group 1000008628.svg"
										alt="Bell Icon"
										width={30}
										height={30}
										draggable={false}
									/>
									<h1 className="text-lg text-[#3BD671]">Operational</h1>
								</div>
							</div>
							<StatusPercentage greenPercentage={status.api} totalDivs={100} />
						</div>
						<div className="border-b border-[#6e6e6e] pb-6 mt-6">
							<div className="flex  flex-col sm:flex-row justify-between gap-3">
								<div className="flex items-center gap-3 text-lg">
									<h1>Web App</h1>
									<Image
										src="/svgs/icon-arrow-right.svg"
										alt="Calendar"
										width={15}
										height={15}
									/>
									<span>|</span>
									<h1 className="text-[#3BD671]">{status.webApp}%</h1>
								</div>
								<div className="flex items-center gap-3">
									<Image
										src="/svgs/Group 1000008628.svg"
										alt="Bell Icon"
										width={30}
										height={30}
										draggable={false}
									/>
									<h1 className="text-lg text-[#3BD671]">Operational</h1>
								</div>
							</div>
							<StatusPercentage greenPercentage={status.api} totalDivs={100} />
						</div>
						<div className="pb-6 mt-6">
							<div className="flex  flex-col sm:flex-row justify-between gap-3">
								<div className="flex items-center gap-3 text-lg">
									<h1>Website </h1>
									<Image
										src="/svgs/icon-arrow-right.svg"
										alt="Calendar"
										width={15}
										height={15}
									/>
									<span>|</span>
									<h1 className="text-[#3BD671]">{status.api}%</h1>
								</div>
								<div className="flex items-center gap-3">
									<Image
										src="/svgs/Group 1000008628.svg"
										alt="Bell Icon"
										width={30}
										height={30}
										draggable={false}
									/>
									<h1 className="text-lg text-[#3BD671]">Operational</h1>
								</div>
							</div>
							<StatusPercentage greenPercentage={status.Website} totalDivs={100} />
						</div>
					</div>
				</section>
				<section className="mt-10 sm:mt-20">
					<div className="flex justify-between">
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							draggable={false}
							className="w-[450px] h-[70px] absolute left-0 -translate-y-3"
						/>
						<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Overall Uptime{" "}
						</h1>
					</div>
					<div className="border-4 border-gray-400/30 rounded-2xl bg-gray-400/10 backdrop-blur-3xl mt-10 p-8 grid gap-y-10 grid-cols-2 md:grid-cols-4">
						<div className="flex flex-col items-center gap-2 md:border-r border-white/80">
							<h1 className="text-2xl text-white font-semibold">100.000%</h1>
							<p className="text-gray-400">Last 24 hours</p>
						</div>
						<div className="flex flex-col items-center gap-2 md:border-r border-white/80">
							<h1 className="text-2xl text-white font-semibold">100.000%</h1>
							<p className="text-gray-400">Last 7 days</p>
						</div>
						<div className="flex flex-col items-center gap-2 md:border-r border-white/80">
							<h1 className="text-2xl text-white font-semibold">100.000%</h1>
							<p className="text-gray-400">Last 30 days</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<h1 className="text-2xl text-white font-semibold">99.994%</h1>
							<p className="text-gray-400">Last 90 days</p>
						</div>
					</div>
				</section>
				<section className="mt-10 sm:mt-20">
					<div className="flex justify-between">
						<Image
							src="/slash.png"
							alt="Slashes"
							height={100}
							width={600}
							draggable={false}
							className="w-[450px] h-[70px] absolute left-0 -translate-y-3 "
						/>
						<h1 className="relative uppercase mt-4 text-2xl md:text-3xl bg-gradient-to-b from-white to-gray-600 font-bold text-transparent bg-clip-text z-10">
							Status updates{" "}
							<span className="text-lg text-gray-400 font-medium">
								(Last 30 days)
							</span>
						</h1>
					</div>
					<div className="border-4 border-gray-400/30 rounded-2xl bg-gray-400/10 backdrop-blur-3xl mt-10 grid place-content-center py-14 px-3">
						<p>
							There are no updates in the last 30 days.{" "}
							<span className="text-[#3BD671] cursor-pointer hover:underline">Status update history</span>
						</p>
					</div>
					<div className="flex flex-col md:flex-row  justify-between">
						<div className="flex items-center gap-3 mt-4">
							<div className="flex items-center gap-1 text-[#888888] text-xs cursor-pointer">
								<Image
									src="/svgs/icon-maximize.svg"
									alt="Bell Icon"
									width={20}
									height={20}
									draggable={false}
								/>
								<h1>Full screen mode</h1>
							</div>
							<div className="flex items-center gap-1 text-[#888888] text-xs cursor-pointer">
								<Image
									src="/svgs/icon-bell-off.svg"
									alt="Bell Icon"
									width={20}
									height={20}
									draggable={false}
								/>
								<h1>Alert sound off</h1>
							</div>
						</div>
						<div className="flex flex-wrap gap-2 mt-6">
							<button className="border-r-2 max-h-4 border-[#888888] px-1 text-sm whitespace-nowrap text-[#888888]">
								Unsubscribe
							</button>
							<button className="border-r-2 max-h-4 border-[#888888] px-1 text-sm whitespace-nowrap text-[#888888]">
								Privacy policy
							</button>
							<button className="max-h-4 px-1 text-[#888888] text-sm whitespace-nowrap">
								Terms of Service
							</button>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}
