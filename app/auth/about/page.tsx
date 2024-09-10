import React from "react";
import FormInput from "../components/Input";
import Button from "../components/Button";
import Logo from "@/components/logo";
import AboutForm from "./components/AboutForm";
import Link from "next/link";

export default function About() {
	return (
		<main className="bg-black/90 backdrop-blur-2xl w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center p-3 sm:p-4 w-full max-w-[450px]">
				<div className="flex flex-col items-center">
					<Logo />
					<h1 className="text-2xl sm:text-4xl font-bold mt-6 tracking-tight text-center">
						Tell Us About You
					</h1>
				</div>
				<AboutForm/>
				<div className="mt-6">
					<p className="max-w-sm text-center text-sm text-white/50">
						By Clicking “<Link href="#" className="text-primary-red hover:underline">Continue</Link>”,
						You Agree to Our Terms and Acknowledge Our{" "}
						<Link href="/user-agreements/privacy-policy" className="text-primary-red cursor-pointer hover:underline">Privacy Policy</Link>
					</p>
				</div>
			</div>
		</main>
	);
}
