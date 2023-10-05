import Logo from "@/components/logo";
import React from "react";

import PhoneNumberInput from "./components/PhoneNumberInput";
import PageLayout from "../../components/PageLayout";

export default function VerifyNumber() {
	return (
		<main className="bg-black/90 backdrop-blur-2xl  w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="w-full max-w-[470px] p-3 sm:p-4">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="text-2xl sm:text-4xl sm:text-[39px] font-bold mt-6 text-center sm:whitespace-nowrap my-4 capitalize tracking-tighter">
						Verify your phone number
					</h1>
				</div>
				<PhoneNumberInput />
			</div>
		</main>
	);
}
