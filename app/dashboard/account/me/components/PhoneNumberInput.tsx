import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberInput() {
	return (
		<div className="edit-form space-y-2">
			<label className="leading-6 text-white/80">Phone Number</label>
			<PhoneInput
				inputStyle={{
					backgroundColor: "#454545",
					width: "100%",
					height: "100%",
					color: "white",
					border: "none",
					paddingLeft: "60px",
					borderRadius: "8px",
				}}
				containerStyle={{ width: "100%", height: "48px", borderRadius: "8px" }}
				buttonStyle={{
					width: "48px",
					height: "48px",
					borderRadius: "8px",
					backgroundColor: "#454545",
					borderColor: "#656565",
					border: "none",
					
				}}
				country={"in"}
				onChange={() => {}}
				inputProps={{
					required: true,
				}}
			/>
		</div>
	);
}
