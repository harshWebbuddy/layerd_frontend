import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";
import React from "react";
import BrainButton from "../components/BrainButton";

export default function page() {
	return (
		<section className="px-4 md:px-10">
			<div className="flex justify-between w-full">
				<div />
				<div className="flex gap-6">
					<NavigationButton
						link="/dashboard/main/create-your-own/uploads"
						styleClass="">
						Upload
					</NavigationButton>
					<NavigationButton
						styleClass=""
						link="/dashboard/main/create-your-own/chat">
						Chat
					</NavigationButton>
					<NavigationButton
						styleClass=""
						link="/dashboard/main/create-your-own/chat">
						Explore
					</NavigationButton>
					<BrainButton/>
				</div>
			</div>
			<div className="flex justify-center mt-6">
				<div className="w-full max-w-7xl space-y-8">
					<div className="space-y-1">
						<h1 className="text-2xl font-semibold capitalize text-center">
							Explore Uploaded Data in Default Brain
						</h1>
						<p className="text-[#ABAEB7] text-center">
							View or delete stored data used by your brain
						</p>
					</div>
					<div className="border-gradient flex flex-col sm:flex-row sm:items-center gap-4 justify-between p-6 bg-gradient-to-br from-[#ffffff23] to-[#a8a8a817] rounded-xl">
						<h1 className="text-lg font-semibold">Resume-Sheraz-Ahmed.pdf</h1>
						<div className="flex items-center gap-2">
							<button className="bg-gradient-to-r from-primary-red to-primary-yellow py-3 rounded-lg w-[130px]">
								View
							</button>
							<button className="bg-primary-red py-3 rounded-lg w-[130px]">
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
