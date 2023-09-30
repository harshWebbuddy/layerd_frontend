import React from "react";
import clsx from "clsx";

type Props = {
	label: string;
	id: string;
	type?: string;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
};

const Input = ({ label, id, disabled, required, type , placeholder}: Props) => {
	return (
		<div className="w-full">
			<label
				htmlFor={id}
				className="block leading-6 text-white/80 capitalize">
				{label}
			</label>
			<div className="mt-2 ">
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					placeholder={placeholder}
					className={clsx(
						`block w-full rounded-lg border-0 py-1.5 ring-2 ring-inset ring-neutral-800/70 outline-none bg-neutral-800/40 placeholder:text-white/50 px-4 h-[54px] text-sm focus:ring-2 focus:ring-inset focus:ring-neutral-800 transition duration-300 focus-within:bg-neutral-800/60 sm:leading-6`,
						disabled && "opacity-50 cursor-default"
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
