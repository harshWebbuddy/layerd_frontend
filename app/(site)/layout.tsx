import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface Props {
	children: React.ReactNode;
}

export default function layout({ children }: Props) {
	return (
		<main className="bg-[#141418] overflow-hidden">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
}
