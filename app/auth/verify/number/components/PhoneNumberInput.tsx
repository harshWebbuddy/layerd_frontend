"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import React, { useState } from "react";
import Button from "@/app/auth/components/Button";
import { useRouter } from "next/navigation";

export default function PhoneNumberInput() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const router = useRouter()
	const handleChange = (value: string) => {
		setPhoneNumber(value);
	};
	const submitHandler = (e: any) => {
		e.preventDefault();
		router.push('/auth/verify/otp');
	}
	return (
		<div className="text-black w-full">
			<form className="space-y-10 mt-6" onSubmit={submitHandler}>
				<PhoneInput
					inputStyle={{
						backgroundColor: "#0F0F0F",
						width: "calc(100% - 60px)",
						height: "100%",
						color: "white",
						border: "1px solid #2D2D2D",
						paddingLeft: "10px",
						borderRadius: "7px",
						marginLeft: "60px",
					}}
					containerStyle={{ width: "100%", height: "50px" }}
					buttonStyle={{
						width: "50px",
						height: "50px",
						backgroundColor: "#0F0F0F",
						border: "1px solid #2D2D2D",
						borderRadius: "7px",
					}}
					country={"in"}
					value={phoneNumber}
					onChange={handleChange}
					inputProps={{
						required: true,
					}}
				/>
				<Button type="submit">Send Code VIA SMS</Button>
			</form>
		</div>
	);
}
