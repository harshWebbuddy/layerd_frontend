import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function Form() {
	let disabled = false;
	return (
		<form className="space-y-6">
			<div className="flex flex-col sm:flex-row gap-16">
				<div className="w-full space-y-6">
					<h1 className="font-semibold leading-relaxed">
						In order to enable enhanced security measures, setup Google Two
						Factor Authentication for Login.
					</h1>
					<p className="text-sm text-white/80 leading-relaxed">
						Scan the QR code below or use setup key on your Google Authenticator
						app to add your account.
					</p>
					<div className="grid place-content-center">
						<Image
							src="/main/qr-code.png"
							alt="code"
							width={200}
							height={200}
						/>
					</div>
				</div>
				<div className="w-full space-y-3">
					<label htmlFor="auth-otp">
						Enter Google Authenticator OTP{" "}
						<span className="text-primary-red">*</span>
					</label>
					<input
						type="text"
						name=""
						id="auth-otp"
						className={clsx(
							`block w-full rounded-lg border-0 py-1.5 bg-[#454545] placeholder:text-white/50 px-4 h-[52px] text-sm focus:ring-1 focus:ring-inset focus:ring-[#5f5f5f] outline-none transition duration-300 sm:leading-6`,
							disabled && "opacity-50 cursor-default"
						)}
					/>
				</div>
			</div>
			<div className="w-full space-y-3">
				<label htmlFor="auth-key">Setup Key</label>
				<input
					type="text"
					name=""
					id="auth-key"
					className={clsx(
						`block w-full rounded-lg border-0 py-1.5 bg-[#454545] placeholder:text-white/50 px-4 h-[52px] text-sm focus:ring-1 focus:ring-inset focus:ring-[#5f5f5f] outline-none transition duration-300 sm:leading-6`,
						disabled && "opacity-50 cursor-default"
					)}
					placeholder="JE33ADTHCT65Y3KV"
				/>
			</div>
		</form>
	);
}
