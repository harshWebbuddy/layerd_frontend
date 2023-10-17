import React from "react";
import Select, { StylesConfig } from "react-select";

type ItemType = {
	value: string;
	label: string;
};
export default function Selection({
	id,
	label,
	items,
	required,
	placeholder,
}: {
	id: string;
	label?: string;
	required?: boolean;
	items: ItemType[];
	placeholder: string;
}) {
	return (
		<div className="w-full space-y-2 ">
			{label && (
				<label
					htmlFor={id}
					className="block leading-6 text-white/80 capitalize">
					{label}
				</label>
			)}
			<Select
				id={id}
				required={required}
				options={items}
				placeholder={placeholder}
				theme={(theme) => ({
					...theme,
					borderRadius: 10,
					colors: {
						...theme.colors,
						primary25: "",
						primary: "#5f5f5f",
						primary50: "#5f5f5f",
					},
				})}
				noOptionsMessage={() => "No industries found"}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "#32323280",
						minHeight: "50px",
						border: "2px solid #514E4E",
						color: "white",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "#424242",
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
