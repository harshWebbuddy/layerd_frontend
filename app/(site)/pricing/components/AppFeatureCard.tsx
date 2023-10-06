import { FeatureGroup } from "@/types";
import React from "react";
interface Props {
	feature: FeatureGroup;
}
export default function AppFeatureCard({ feature }: Props) {
	return (
		<div className="bg-[url('/noise.png')] bg-cover bg-center w-full max-w-[450px] min-w-fit h-full rounded-3xl overflow-hidden">
			<div className="bg-gradient-to-br from-[#292929]/90 to-[#181818]/10 h-full">
				<h1 className="bg-[#353535] p-4 text-[#F9BA3F] uppercase font-semibold px-10 text-lg">{feature.name}</h1>
				<div className="p-6">
					<ul className={`space-y-2 pt-1 pb-5 px-4 sm:px-10`}>
						{feature.features.map((feature, index) => (
							<div>
								<div className="list-item">
									<li
										key={index}
										className="list-disc text-white font-semibold capitalize md:whitespace-nowrap">
										{feature.title}
									</li>
								</div>
								<ul className="pl-6 space-y-1 mt-1">
									{feature.peer.map((item: string, index: number) => (
										<li key={index} className="list-disc text-sm text-white/60">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
