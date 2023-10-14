import React from "react";
import ChatHistory from "./ChatHistory";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-1 px-6">
			<ChatHistory />
      <div className="h-full w-[3px] bg-gradient-to-b from-transparent via-white/30 to-transparent"/>
			{children}
		</div>
	);
}
