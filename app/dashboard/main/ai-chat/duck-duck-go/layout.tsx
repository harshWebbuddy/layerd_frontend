import React from "react";
import ChatHistory from "./ChatHistory";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col md:flex-row flex-1 space-y-6 px-3 md:px-6 pb-6 gap-4">
			<ChatHistory />
			{children}
		</div>
	);
}
