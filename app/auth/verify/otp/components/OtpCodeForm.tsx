"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import OtpInput from "react-otp-input";

export default function OtpCodeForm() {
	const [otp, setOtp] = useState("");
	const router = useRouter();
	const submitHandler = (e: any) => {
		e.preventDefault();
		router.push("/auth/login");
	};
	return (
		<div className="max-w-full mt-6">
			<form onSubmit={submitHandler}>
				<OtpInput
					value={otp}
					onChange={setOtp}
					numInputs={5}
					renderInput={(props) => <input {...props} />}
					inputStyle={{
						height: "80px",
						width: "100%",
						backgroundColor: "#0F0F0F",
						border: "2px solid #2D2D2D",
						borderRadius: "12px",
						marginInline: "1.5%",
						fontSize: "30px",
						outline: "none",
						userSelect: "none",
					}}
					placeholder={"0"}
					shouldAutoFocus={true}
				/>
				<button className="bg-[#242424] hover:bg-[#303030] transition duration-300 mt-10 w-full h-14 rounded-lg font-bold">
					Resend Code
				</button>
			</form>
		</div>
	);
}
