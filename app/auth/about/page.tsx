import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "@/components/logo";
import AboutForm from "./components/AboutForm";

export default function About() {
	return (
		<main className="bg-black w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center p-3 sm:p-4 w-full max-w-[450px]">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="text-4xl font-bold mt-6 tracking-tight text-center">
						Tell Us About You
					</h1>
				</div>
				<AboutForm/>
				<div className="mt-6">
					<p className="max-w-sm text-center text-sm text-white/50">
						By Clicking “<a href="#" className="text-primary-red hover:underline">Continue</a>”,
						You Agree to Our Terms and Acknowledge Our{" "}
						<a href="#" className="text-primary-red cursor-pointer hover:underline">Privacy Policy</a>
					</p>
				</div>
			</div>
		</main>
	);
}
