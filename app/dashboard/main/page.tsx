import React from "react";
import LandingForm from "./components/LandingForm";
import Image from "next/image";

export default function Main() {
	return (
		<section className="flex-1 w-full flex items-center justify-center p-3">
			<div className="w-full max-w-2xl mb-28 flex flex-col items-center space-y-10">
				<Image
					src="/logo.svg"
					alt="logo"
					width={200}
					height={100}
					draggable={false}
					className="w-52"
				/>
				<LandingForm />
			</div>
		</section>
	);
}
