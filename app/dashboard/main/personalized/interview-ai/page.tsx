import React from "react";
import Difficulty from "./components/Difficulty";
import Image from "next/image";
import NavigationButton from "@/app/dashboard/components/NavigationButton";

export default function page() {
	return (
		<section className="relative h-full text-sm flex justify-center items-center">
			<div className="h-full space-y-5 w-full max-w-3xl flex flex-col  justify-center">
				<h1 className="text-2xl font-bold">And An Interviewer</h1>
				<p className="text-[#ABAEB7] max-w-md">
					Choose whoever makes you feel comfortable. You can always try again
					with another one.
				</p>
				<Difficulty />
				<NavigationButton
					link="/dashboard/main/personalized/interview-ai/interviewer"
					styleClass="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#3d3d3d] p-3 !mt-10 w-[200px] rounded-lg self-end">
					<span>Contine</span>
					<Image
						src="/arrow-right.svg"
						alt="Arrow Right"
						width={20}
						height={20}
					/>
				</NavigationButton>
			</div>
		</section>
	);
}
