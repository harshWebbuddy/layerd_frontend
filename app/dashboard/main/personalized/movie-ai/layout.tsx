import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-[url('/movie-background-ai.png')] bg-no-repeat bg-cover bg-fixed bg-center h-full absolute inset-0">
			<div className="bg-black/90 absolute inset-0 p-3">{children}</div>
		</div>
	);
}
