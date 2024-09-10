"use client"

import React from "react";
import FormInput from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

type Props = {};

export default function AboutForm({}: Props) {
	const router = useRouter();
	const submitHandler = (e: any) => {
		e.preventDefault();
		router.push("/auth/verify/number");
	};
	return (
		<form
			className="space-y-10 mt-10 w-full sm:min-w-[400px]"
			onSubmit={submitHandler}>
			<div className="space-y-6">
				<FormInput
					id="firstName"
					label="First name"
					type="email"
					required={true}
					placeholder="Last name"
				/>
				<FormInput
					id="password"
					label="Last name"
					type="password"
					required={true}
					placeholder="Last name"
				/>
			</div>
			<Button type="submit">Continue</Button>
		</form>
	);
}
