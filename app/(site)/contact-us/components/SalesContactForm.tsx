"use client";

import Modal from "@/components/Modal";
import React from "react";
import Input from "./Input";
import Checkbox from "./CheckBox";
import SelectComponent from "./SelectComponent";
import { industryOptions, sourceInquiry } from "../constants";
interface Iprops {
	isOpen: boolean;
	onClose: () => void;
}
export default function SalesContactForm({ isOpen, onClose }: Iprops) {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<h1 className="capitalize mt-4 text-xl md:text-2xl bg-gradient-to-b from-white to-gray-500 font-bold text-transparent bg-clip-text">
					Contact The WhopMe Sales
				</h1>
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
							placeholder="Select industry"
							required={true}
						/>
					</div>
					<Input
						id="country"
						label="country"
						type="text"
						placeholder="Select"
						required={true}
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
					<div>
						<p>What services are you interested in?</p>
						<div className="flex flex-wrap gap-5 my-4">
							<Checkbox id="checkbox1" label="AI Search Engine" />
							<Checkbox id="checkbox2" label="AI Chats" />
							<Checkbox id="checkbox3" label="AI Images" />
							<Checkbox id="checkbox1" label="AI Coding" />
							<Checkbox id="checkbox2" label="AI Custom Chat" />
							<Checkbox id="checkbox3" label="Personalized AI" />
						</div>
					</div>
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
					<Checkbox id="consent" label="Consent" />
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
