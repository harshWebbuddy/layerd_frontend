import clsx from "clsx";
import React, { useEffect } from "react";

//@ts-ignore
import CreditCardInput from "react-credit-card-input";

type Props = {
	selectedPayement: "paypal" | "stripe" | null;
};

export default function PaymentDetails({ selectedPayement }: Props) {
	if (!selectedPayement) return;
	if (selectedPayement === "paypal")
		return (
			<div className="flex justify-center mt-6">
				<p className="text-white/70 max-w-md text-center text-sm">
					In order complete your Checkout Process you will be redirected to
					PayPal Website.
				</p>
			</div>
		);

	if (selectedPayement === "stripe") {
		useEffect(() => {
			const input_card =
				document.getElementsByClassName("credit-card-input")[0];
			if (input_card) {
				//@ts-ignore
				input_card.style.position = "relative";
			}
		}, []);

		return (
			<div>
				<form className="space-y-6 mt-6">
					<div className="w-full">
						<label
							htmlFor="cardholderName"
							className="block leading-6 text-white/80 capitalize text-sm">
							Cardholder Full Name
						</label>
						<div className="mt-2 ">
							<input
								id="cardholderName"
								type="text"
								// disabled={disabled}
								placeholder="example@email.com"
								className={clsx(
									`block w-full rounded-lg border-0 py-1.5 bg-[#505052] placeholder:text-white/50 px-4 h-[48px] text-sm ring-1 focus:ring-2 ring-inset ring-[#5f5f5f] outline-none transition duration-300 sm:leading-6`
									// disabled && "opacity-50 cursor-default"
								)}
							/>
						</div>
					</div>
					<div className="w-full">
						<label
							htmlFor="cardNumber"
							className="block leading-6 text-white/80 capitalize text-sm">
							Card Number
						</label>
						<CreditCardInput
							fieldClassName="!bg-[#505052] !p-4 !w-full !rounded-lg ring-1 focus-within:ring-2 ring-inset ring-[#5f5f5f]"
							inputClassName="!bg-[#505052] !w-full"
							inputStyle={{ maxWidth: "none" }}
							containerClassName="!w-full"
						/>
					</div>
				</form>
			</div>
		);
	}
}
