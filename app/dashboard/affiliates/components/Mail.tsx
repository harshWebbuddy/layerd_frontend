import React from "react";
import Input from "../../account/me/components/Input";

export default function Mail() {
	return (
		<form className="flex flex-col sm:flex-row gap-6 items-end">
			<Input
				id="mail"
				label="Insert your friends email address and send him an invitations to join WhopeMe!"
				placeholder="example@gmail.com"
				required={true}
        type="email"
			/>
			<button
				type="submit"
				className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg font-semibold">
				Send
			</button>
		</form>
	);
}
