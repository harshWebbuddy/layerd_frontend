"use client"

import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

type Props = {};

export default function LoginForm({}: Props) {
  const router = useRouter()
  const submitHandler = (e: any) => {
		e.preventDefault();
	}
	return (
		<form className="space-y-10 mt-7" onSubmit={submitHandler}>
			<div className="space-y-6">
				<Input
					id="email"
					label="email/Phone"
					type="email"
					required={true}
					placeholder="example@email.com"
				/>
				<Input
					id="password"
					label="password"
					type="password"
					required={true}
					placeholder="Your password"
				/>

				<div className="flex items-center gap-3 mt-10">
					<div className="checkbox">
						<input type="checkbox" className="input-checkbox" />
					</div>
					<p className="text-white/50">Remember Me</p>
				</div>
			</div>
			<Button type="submit">Sign in</Button>
		</form>
	);
}
