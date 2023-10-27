import React from "react";
import Form from "./components/Form";

export default function page() {
	return (
		<div className="p-2 sm:px-7 sm:pr-10 space-y-4">
			<h1 className="text-2xl font-semibold">Create New Team Member</h1>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-4 py-10 sm:p-10">
				<Form />
			</div>
		</div>
	);
}
