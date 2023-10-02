import React from "react";
import clsx from "clsx";

type Props = {
	label: string;
	id: string;
	type?: string;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
	optional?: boolean;
};

const Input = ({
	label,
	id,
	disabled,
	required,
	type,
	placeholder,
	optional,
}: Props) => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block leading-6 text-white/80 capitalize">
				{label}
				{required && <span className="text-primary-red">*</span>}
				{optional && <span className="text-[#6F6F6F] text-sm"> (Optional)</span>}
			</label>
			<div className="mt-2 ">
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					placeholder={placeholder}
					className={clsx(
						`block w-full rounded-lg border-0 py-1.5 ring-1 ring-inset ring-[#c5c5c5] outline-none bg-transparent placeholder:text-white/50 px-4 h-[50px] text-sm focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 focus-within:bg-neutral-800/20 sm:leading-6`,
						disabled && "opacity-50 cursor-default"
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
