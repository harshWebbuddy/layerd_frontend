import React from "react";
import Select, { StylesConfig } from "react-select";

type ItemType = {
	value: string;
	label: string;
};
export default function Selection({
	id,
	items,
	required,
	placeholder,
}: {
	id: string;
	required?: boolean;
	items: ItemType[];
	placeholder: string;
}) {
	return (
		<div className="w-full space-y-2 ">
			<Select
				id={id}
				required={required}
				options={items}
				placeholder={placeholder}
				theme={(theme) => ({
					...theme,
					borderRadius: 7,
					colors: {
						...theme.colors,
						primary25: "",
						primary: "none",
						primary50: "none",
					},
				})}
				noOptionsMessage={() => "No industries found"}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
            background: "linear-gradient(139deg, rgba(255, 255, 255, 0.13) -6.39%, rgba(143, 143, 143, 0.06) 112.17%)",
						minHeight: "50px",
						border: "none",
						color: "white",
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: "#302f33",
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
