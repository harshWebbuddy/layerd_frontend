"use client";

import Modal from "@/components/Modal";
import React from "react";
import Input from "./Input";
import Checkbox from "./CheckBox";
import SelectComponent from "./SelectComponent";
interface Iprops {
	isOpen: boolean;
	onClose: () => void;
}
import { industryOptions, sourceInquiry } from "../constants";

export default function PartnershipRequestForm({ isOpen, onClose }: Iprops) {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<h1 className="capitalize mt-4 text-xl md:text-2xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
					Partnership Inquiries
				</h1>
				<p className="text-sm text-white/80 my-6">
					Partner with Writesonic to leverage powerful AI-powered tools to
					create amazing content faster and easier with easy API access.
				</p>
				<form className="space-y-5 mt-10" onSubmit={(e) => e.preventDefault()}>
					<div className="flex gap-4">
						<Input
							id="firstName"
							label="first name"
							placeholder="First Name"
							type="text"
							required={true}
							//disable button with loading state, default --> false
							disabled={false}
						/>
						<Input
							id="lastName"
							label="last name"
							placeholder="Last Name"
							type="text"
							required={true}
							//disable button with loading state, default --> false
							disabled={false}
						/>
					</div>
					<Input
						id="email"
						label="email"
						placeholder="Email"
						type="text"
						required={true}
						//disable button with loading state, default --> false
						disabled={false}
					/>
					<div className="flex gap-4">
						<Input
							id="phoneNumber"
							label="Phone Number"
							placeholder="Phone Number"
							type="text"
							required={true}
							//disable button with loading state, default --> false
							disabled={false}
						/>
						<Input
							id="companyName"
							label="company name"
							placeholder="Company Name"
							type="text"
							required={true}
							//disable button with loading state, default --> false
							disabled={false}
						/>
					</div>
					<div className="flex gap-4">
						<Input
							id="jobTitle"
							label="Job Title"
							placeholder="Job Title"
							type="text"
							required={true}
							//disable button with loading state, default --> false
							disabled={false}
						/>
						<SelectComponent
							items={industryOptions}
							label="Industry"
							placeholder="Select"
							required={true}
						/>
					</div>
					<SelectComponent
						items={industryOptions}
						label="Country"
						placeholder="Select Country"
						required={true}
					/>

					<Input
						id="website"
						label="Website URL"
						type="text"
						placeholder="Website URL"
						//disable button with loading state, default --> false
						disabled={false}
					/>

					<SelectComponent
						items={sourceInquiry}
						label="How did you hear about us?"
						placeholder="Select industry"
						required={false}
						isMulti={true}
					/>

					<div className="space-y-2">
						<label htmlFor="additionalInformation">
							Additional Information{" "}
							<span className="text-[#6F6F6F] text-sm">(Optional)</span>
						</label>
						<textarea
							name="additionalInformation"
							id="additionalInformation"
							className="h-40 w-full ring-1 ring-[#b1b1b1] bg-transparent resize-none p-4 rounded-lg"
							placeholder="Type your message here"></textarea>
					</div>
					<Checkbox
						id="consent"
						label="Please note that GDPR compliance is important if we are dealing with customers from the European Union. we may need to adjust these fields based on our specific needs and legal requirements."
					/>
					<button
						type="submit"
						className="bg-primary-red py-4 w-full rounded-lg">
						Send Message
					</button>
				</form>
			</Modal>
		</div>
	);
}
