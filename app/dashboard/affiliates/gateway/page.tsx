import React from "react";
import Form from "./components/Form";

export default function page() {
	return (
		<section className="px-3 sm:px-10 py-5 space-y-5">
			<div>
				<h1 className="text-3xl font-semibold leading-relaxed">
					My Payment Gateway
				</h1>
				<p className="text-white/70 text-sm">
					Affiliate {">>"}
					<span className="text-primary-yellow"> My Payment Gateway</span>
				</p>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-4 sm:p-10 max-w-2xl">
				<h1 className="text-primary-yellow capitalize text-xl font-semibold leading-loose">
					My Payment Gateway
				</h1>
        <p>Select your preferred payment method to receive commissions.</p>
        <Form/>
			</div>
		</section>
	);
}
