import React from "react";

interface Props {
	type?: "submit" | "reset" | "button";
	children: React.ReactNode;
}
export default function Button({ children, type }: Props) {
	return (
		<button
			type={type || "submit"}
			className="bg-gradient-to-r text-white font-semibold from-primary-red to bg-primary-yellow w-full capitalize flex items-center justify-center py-3.5 rounded-lg">
			{children}
		</button>
	);
}
