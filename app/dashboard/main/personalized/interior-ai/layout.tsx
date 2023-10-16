import PageTransitionLayout from "@/app/dashboard/components/PageTransitionLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<PageTransitionLayout>{children}</PageTransitionLayout>;
			<div className="fixed bottom-0">
				<div className="w-[600px] h-[138px] bg-[#FFB076] blur-[250px] absolute bottom-[-100px] left-[-200px]" />
				<h1 className="text-[#0b0e1721] relative select-none text-9xl font-[800] m-4 uppercase">
					Interior
				</h1>
			</div>
		</div>
	);
}
