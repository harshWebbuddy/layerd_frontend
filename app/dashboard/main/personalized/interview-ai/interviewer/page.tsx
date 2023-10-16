import React from "react";
import SelectInterviewer from "./components/SelectInterviewer";
import NavigationButton from "@/app/dashboard/components/NavigationButton";
import Image from "next/image";

export default function page() {
	return (
		<section className="relative h-full text-sm flex justify-center items-center">
			<div className="h-full space-y-5 w-full max-w-3xl flex flex-col  justify-center">
				<h1 className="text-2xl font-bold">Select A Question Type</h1>
				<p className="text-[#ABAEB7] max-w-lg">
					We have hundreds of questions from top tech companies. Choose a type
					to get started.
				</p>
				<SelectInterviewer />
				<div className="flex justify-end gap-4 !mt-10">
					<NavigationButton
						link="/dashboard/main/personalized/interview-ai"
						styleClass="font-bold flex items-center justify-between gap-3 ring-1 ring-white/60 bg-transparent hover:bg-[#3d3d3d2d] transition p-3 w-[200px] rounded-lg self-end">
						<Image
							src="/arrow-left.svg"
							alt="Arrow left"
							width={20}
							height={20}
						/>
						<span>Back</span>
					</NavigationButton>
					<NavigationButton
						link="/dashboard/main/personalized/interview-ai/interviewer"
						styleClass="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] p-3 w-[200px] rounded-lg self-end">
						<span>Contine</span>
						<Image
							src="/arrow-right.svg"
							alt="Arrow Right"
							width={20}
							height={20}
						/>
					</NavigationButton>
				</div>
			</div>
		</section>
	);
}
