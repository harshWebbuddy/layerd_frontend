import React from "react";
import PasswordForm from "./components/Form";

export default function page() {
	return (
		<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg px-4 py-6 sm:p-10">
			<PasswordForm />
		</div>
	);
}
