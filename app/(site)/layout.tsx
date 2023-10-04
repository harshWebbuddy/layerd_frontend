import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function layout({ children }: Props) {
	return (
		<main className="bg-[url('/grains.png')] bg-cover overflow-hidden">
			<div className="bg-[#1E1E26]/20">
				<Navbar />
				{children}
				<Footer />
			</div>
		</main>
	);
}
