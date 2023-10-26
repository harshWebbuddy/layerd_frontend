import React from "react";
import LandingForm from "./components/LandingForm";
import Image from "next/image";

export default function Main() {
	return (
		<section className="flex-1 w-full flex items-center justify-center p-3">
			<div className="w-full max-w-4xl mb-28 flex flex-col items-center space-y-7">
				<Image
					src="/logo.svg"
					alt="logo"
					width={300}
					height={200}
					draggable={false}
					className="w-60"
				/>
				<LandingForm />
			</div>
		</section>
	);
}
