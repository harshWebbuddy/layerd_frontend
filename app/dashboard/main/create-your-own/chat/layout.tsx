import React from "react";
import ChatHistory from "./ChatHistory";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col md:flex-row gap-y-10 flex-1 px-3 sm:px-6">
			<ChatHistory />
			{children}
		</div>
	);
}
