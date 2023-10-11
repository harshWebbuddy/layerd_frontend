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
	defaultValue?: string;
};

const Input = ({
	label,
	id,
	disabled,
	required,
	type,
	placeholder,
	optional,
	defaultValue
}: Props) => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block leading-6 text-white/80 capitalize">
				{label}
				{required && <span className="text-primary-red">*</span>}
				{optional && (
					<span className="text-[#6F6F6F] text-sm"> (Optional)</span>
				)}
			</label>
			<div className="mt-2 ">
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					placeholder={placeholder}
					value={defaultValue}
					className={clsx(
						`block w-full rounded-lg border-0 py-1.5 bg-[#454545] placeholder:text-white/50 px-4 h-[48px] text-sm focus:ring-1 focus:ring-inset focus:ring-[#5f5f5f] outline-none transition duration-300 sm:leading-6`,
						disabled && "opacity-50 cursor-default"
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
