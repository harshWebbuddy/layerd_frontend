import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-[url('/main/background-image-writing.png')] bg-cover bg-no-repeat absolute inset-0 h-full">
			<div className="mt-28">{children}</div>
		</div>
	);
}
