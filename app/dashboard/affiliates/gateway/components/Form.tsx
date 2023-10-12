import React from "react";
import CheckBox from "./CheckBox";
import Input from "@/app/dashboard/account/me/components/Input";

export default function Form() {
	return (
		<form className="mt-10 space-y-5 !text-base">
			<div className="flex gap-10">
				<CheckBox id="paypal-check" label="PayPal" />
				<CheckBox id="bank-check" label="Bank Transfer" />
			</div>
			<Input
				id="payId"
				placeholder="Your PayPal ID"
				label="Enter your PayPal ID"
				type="text"
			/>
			<div className="space-y-3">
				<p className="block leading-6 text-white/80 capitalize ">
					Enter your Bank Account Requisites
				</p>
				<div className="block leading-6 text-white/80 capitalize w-full rounded-lg border-0 py-4 bg-[#454545] px-4  focus:ring-1 focus:ring-inset focus:ring-[#5f5f5f] outline-none transition duration-300 sm:leading-6">
					<div className="flex gap-2">
						<label className="text-white/50 " htmlFor="bank_name">
							Bank Name:{" "}
						</label>
						<input
							id="bank_name"
							className="bg-transparent flex-1 w-full outline-none"
						/>
					</div>
					<div className="flex gap-2 mt-3">
						<label className="text-white/50 " htmlFor="account_name">
							Account Name/Full Name:
						</label>
						<input
							id="account_name"
							className="bg-transparent flex-1 w-full outline-none"
						/>
					</div>
					<div className="flex gap-2 mt-3">
						<label className="text-white/50 " htmlFor="account_number">
							Account Number/IBAN:
						</label>
						<input
							id="account_number"
							className="bg-transparent flex-1 w-full outline-none"
						/>
					</div>
					<div className="flex gap-2 mt-3">
						<label className="text-white/50 " htmlFor="bic_swift">
							BIC/Swift:
						</label>
						<input
							id="bic_swift"
							className="bg-transparent flex-1 w-full outline-none"
						/>
					</div>
					<div className="flex gap-2 mt-3">
						<label className="text-white/50 " htmlFor="routing_number">
							Routing Number:
						</label>
						<input
							id="routing_number"
							className="bg-transparent flex-1 w-full outline-none"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-end gap-4">
				<button
					type="button"
					className="bg-transparent ring-1 ring-inset ring-white px-10 py-3 rounded-lg hover:bg-white/[0.05] transition duration-300 text-sm">
					Return
				</button>
				<button
					type="submit"
					className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm">
					Save
				</button>
			</div>
		</form>
	);
}
