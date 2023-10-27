import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-full flex flex-col">
			<div className="bg-[url('/movie-background-ai.png')] bg-no-repeat bg-cover bg-fixed bg-center h-screen fixed inset-0" />
			<div className="flex-1 w-full">{children}</div>
		</div>
	);
}
