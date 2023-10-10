"use client";

import React from "react";
import Input from "../../me/components/Input";
import Image from "next/image";
import Selection from "../../me/components/Selection";

export default function Form() {
	const submitHandler = (e: any) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="flex items-center gap-2">
				<Image
					src="/main/key-colored.svg"
					alt="Adjustments"
					width={25}
					height={25}
				/>
				<h1 className="text-primary-yellow font-semibold text-xl">
					Change Password
				</h1>
			</div>
			<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
			<form onSubmit={submitHandler} className="space-y-7">
				<Input
					id="CurrentPassword"
					label="Current Password"
					disabled={false}
					placeholder="Current Password"
					required={true}
					type="password"
					defaultValue="123456789"
				/>
				<Input
					id="newPassword"
					label="New Password"
					disabled={false}
					placeholder="New Password"
					required={true}
					type="password"
					defaultValue="123456789"
				/>

				<Input
					id="ConfirmNewPassword"
					label="Confirm New Password"
					disabled={false}
					placeholder="Confirm New Password"
					required={true}
					type="password"
					defaultValue="123456789"
				/>

				<div className="flex justify-end gap-4">
					<button
						type="button"
						className="bg-transparent ring-1 ring-inset ring-white px-10 py-3 rounded-lg hover:bg-white/[0.05] transition duration-300 text-sm">
						Cancel
					</button>
					<button
						type="submit"
						className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm">
						Change
					</button>
				</div>
			</form>
		</div>
	);
}
