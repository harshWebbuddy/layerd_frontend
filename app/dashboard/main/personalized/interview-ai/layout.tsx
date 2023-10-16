import PageTransitionLayout from "@/app/dashboard/components/PageTransitionLayout";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-full absolute inset-0">
			<div className="w-[600px] h-[138px] bg-[#FFB076] blur-[250px] absolute top-1/3 left-[-550px]" />
			<PageTransitionLayout>{children}</PageTransitionLayout>
		</div>
	);
}
