"use client"

import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRouter } from "next/navigation";

type Props = {};

export default function RegistrationForm({}: Props) {
  const router = useRouter()

  const submitHandler = (e : any) => {
    e.preventDefault();
    router.push('/auth/verify/email')
  }
	
	return (
		<form className="space-y-10 mt-7 w-full" onSubmit={submitHandler}>
			<div className="space-y-6">
				<Input
					id="email"
					label="email"
					type="email"
					required={true}
					placeholder="example@email.com"
				/>
				<div className="flex gap-4 w-full">
					<Input
						id="password"
						label="password"
						type="password"
						required={true}
						placeholder="Your password"
					/>
					<Input
						id="password-repeat"
						label="Repeat password"
						type="password"
						required={true}
						placeholder="Repeat"
					/>
				</div>
				<div className="flex items-center gap-3 mt-10">
					<div className="checkbox">
						<input type="checkbox" className="input-checkbox" />
					</div>
					<p className="text-white/50">
						I have read and accept terms & conditions
					</p>
				</div>
			</div>
			<button>8239041</button>
		</form>
	);
}
