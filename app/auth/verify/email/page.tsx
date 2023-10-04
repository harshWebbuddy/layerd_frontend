import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";
import PageLayout from "../../components/PageLayout";

export default function VerifyEmail() {
	return (
		<main className="bg-black/90 backdrop-blur-2xl  w-full min-w-screen h-full min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center p-3 sm:p-4">
				<Logo />
				<h1 className="text-4xl sm:text-[39px] font-bold capitalize mt-10 text-center tracking-tighter">
					Verify your email
				</h1>
				<div className="text-white/80 flex flex-col items-center mt-6 leading-7">
					<p>We sent an email to</p>
					<p className="text-primary-red">email@email.com</p>
					<p>Click the link inside to get started</p>
					<Link href="/auth/about">
						<button className="bg-[#242424]/50 hover:bg-[#242424]/80 tracking-tight transition duration-300 mt-10 w-full py-3 rounded-lg px-6">
							Click to Verify Email
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
