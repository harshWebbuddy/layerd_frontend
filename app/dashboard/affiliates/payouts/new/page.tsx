import React from "react";
import Form from "../components/Form";

export default function page() {
	return (
		<section className="px-10 py-5 space-y-5">
			<div>
				<h1 className="text-3xl font-semibold leading-relaxed">
					New Payout Request
				</h1>
				<p className="text-white/70 text-sm">
					Affiliate {">>"} My Payouts {">>"}{" "}
					<span className="text-primary-yellow">New Payout Request</span>
				</p>
			</div>
			<div className="w-full bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] backdrop-blur-md rounded-lg p-10">
				<h1 className="text-primary-yellow capitalize text-xl font-semibold">
					Create New Payout Request
				</h1>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
				<div className="flex gap-10">
					<div className="w-full space-y-3">
						<p>
							Minimum amount for all payout request is{" "}
							<span className="text-primary-yellow text-lg font-semibold">
								50
							</span>
						</p>
						<p>
							Your current balance is:{" "}
							<span className="text-primary-yellow text-lg font-semibold">
								0
							</span>
						</p>
						<p>
							Your preferred payout method is:{" "}
							<span className="text-primary-yellow font-semibold">
								Not Set (Please configure it under My Gateway tab)
							</span>
						</p>
					</div>
					<Form />
				</div>
			</div>
		</section>
	);
}
