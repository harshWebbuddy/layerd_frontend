import Logo from "@/components/logo";
import React from "react";
import OtpCodeForm from "./components/OtpCodeForm";

export default function OTPCode() {
	return (
		<main className="bg-black w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="max-w-[500px] p-3 sm:p-4">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="text-4xl sm:text-[45px] font-bold mt-10 text-center capitalize tracking-tight"> Enter code</h1>
					<p className="text-white/80 leading-10 capitalize text-center">Please enter the code we just sent you.</p>
				</div>
				<OtpCodeForm />
			</div>
		</main>
	);
}
