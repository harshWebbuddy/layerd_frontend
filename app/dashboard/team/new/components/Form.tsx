"use client";

import React from "react";
import { countryList } from "@/app/(site)/contact-us/constants";
import PhoneNumberInput from "@/app/dashboard/account/me/components/PhoneNumberInput";
import Selection from "@/app/dashboard/account/me/components/Selection";
import Input from "./Input";
import ToggleButton from "./Toggle";

export default function Form() {
	const submitHandler = (e: any) => {
		e.preventDefault();
	};
	return (
		<div>
			<h1 className="text-primary-yellow  text-xl">Edit Profile</h1>
			<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
			<form onSubmit={submitHandler} className="space-y-7">
				<div className="flex gap-4">
					<Input
						id="fullName"
						label="full name"
						disabled={false}
						placeholder="First Name"
						required={true}
						type="text"
						defaultValue="Sheraz Ahmed"
					/>
					<Input
						id="email"
						label="Email Address"
						disabled={false}
						placeholder="Email Address"
						required={true}
						type="email"
						defaultValue="sherazahmedofficial@gmail.com"
					/>
				</div>
				<div className="flex gap-4">
					<Input
						id="newPassword"
						label="new password"
						disabled={false}
						placeholder="New Password"
						required={true}
						type="password"
						defaultValue="Sheraz Ahmed"
					/>
					<Input
						id="confirmPassword"
						label="Confirm New Passowrd"
						disabled={false}
						placeholder="Confirm password"
						required={true}
						type="password"
						defaultValue="sherazahmedofficial@gmail.com"
					/>
				</div>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />
				<div className="grid grid-cols-3 gap-4">
					<ToggleButton label="Allow Credits for Templates" />
					<ToggleButton label="Allow Credits for AI Chat" />
					<ToggleButton label="Allow Credits for AI Images" defaultEnabled={true}/>
					<ToggleButton label="Allow Credits for AI Code" defaultEnabled={true}/>
					<ToggleButton label="Allow Credits for AI Voiceovers" defaultEnabled={true}/>
					<ToggleButton label="Allow Credits for AI Speech to Text" defaultEnabled={true}/>
				</div>
				<div className="bg-gradient-to-r from-transparent via-[#ffffff62] to-transparent h-[2px] w-full my-4" />

				<div className="flex gap-4">
					<Input
						id="jobRole"
						label="Job Role"
						disabled={false}
						placeholder="Job Role"
						type="text"
						defaultValue="UI/UX Designer"
					/>

					<div className="edit-form w-full">
						<PhoneNumberInput />
					</div>
				</div>
				<div className="flex gap-4">
					<Input
						id="companyName"
						label="company name"
						disabled={false}
						placeholder="Company Name"
						type="text"
						defaultValue="XYZ"
					/>
					<Input
						id="companyWebsite"
						label="company website"
						disabled={false}
						placeholder="Company Website"
						type="text"
						defaultValue="xyz.com"
					/>
				</div>
				<Input
					id="addressLine"
					label="Address Line"
					disabled={false}
					placeholder="Address Line"
					type="text"
					defaultValue="House # xyz, Block xyz. xyz "
				/>
				<div className="flex gap-4">
					<Input
						id="city"
						label="city"
						disabled={false}
						placeholder="city"
						type="text"
						defaultValue="Lahore"
					/>
					<Input
						id="postalCode"
						label="postal Code"
						disabled={false}
						placeholder="Postal Code"
						type="text"
						defaultValue="54900"
					/>
					<Selection
						id="country"
						items={countryList}
						label="Country"
						placeholder="Country"
					/>
				</div>
				<div className="flex justify-end gap-4">
					<button
						type="button"
						className="bg-transparent ring-1 ring-inset ring-white px-10 py-3 rounded-lg hover:bg-white/[0.05] transition duration-300 text-sm">
						Cancel
					</button>
					<button
						type="submit"
						className="bg-gradient-to-r from-primary-red to-primary-yellow  px-10 py-3 rounded-lg text-sm">
						Update
					</button>
				</div>
			</form>
		</div>
	);
}
