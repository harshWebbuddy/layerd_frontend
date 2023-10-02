import React from "react";
import Select, { StylesConfig } from "react-select";
interface ItemType {
	value: string;
	label: string;
}

export default function SelectComponent({
	items,
	label,
	placeholder,
	required,
	isMulti
}: {
	items: ItemType[];
	label: string;
	placeholder: string;
	isMulti ?: boolean;
	required: boolean;
}) {
	return (
		<div className="w-full space-y-2 ">
			<label
				htmlFor="industry"
				className="block leading-6 text-white/80 capitalize">
				{label}{" "}
				{required ? (
					<span className="text-primary-red">*</span>
				) : (
					<span className="text-[#6F6F6F] text-sm"> (Optional)</span>
				)}
			</label>
			<Select
				options={items}
				id="industry"
				placeholder={placeholder}
				isSearchable
				isMulti={isMulti}
				theme={(theme) => ({
					...theme,
					borderRadius: 7,
					colors: {
						...theme.colors,
						primary25: "",
						primary: "white",
						primary50: "#333333",
					},
				})}
				noOptionsMessage={() => "No industries found"}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "transparent",
						minHeight: "50px",
						borderColor: state.isFocused ? "grey" : "white",
						color: "white",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "#212121",
						color: "#fff",
						cursor: "pointer",
					}),
					singleValue: (baseStyles, state) => ({
						...baseStyles,
						color: "#fff",
					}),
				}}
			/>
		</div>
	);
}
