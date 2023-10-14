import React from "react";
import ChatHistory from "./ChatHistory";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-1 px-6">
			<ChatHistory />
			{children}
		</div>
	);
}
