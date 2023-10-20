import Image from "next/image";
import React from "react";
import PromptInput from "../components/PromptInput";

export default function page() {
	return (
		<section className="flex-1 flex flex-col w-full">
			<div className="flex-1">
				<div className="bg-[#323232] p-2 ring-2 ring-[#514E4E] rounded-lg w-full flex items-center gap-4">
					<Image
						src="/main/user-avatar.png"
						alt="user"
						width={55}
						height={55}
            className="rounded-md"
					/>
          <p>UX / UI Details</p>
				</div>
			</div>
			<PromptInput />
		</section>
	);
}
