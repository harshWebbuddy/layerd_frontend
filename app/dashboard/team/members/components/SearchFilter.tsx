import Image from "next/image";
import React from "react";

export default function SearchFilter() {
	return (
		<div className="flex border-b border-white/50 w-full max-w-sm py-2 gap-3">
      <Image
        src="/main/search-white.svg"
        alt="Search"
        width={20}
        height={20}
      />
			<input type="text" className="outline-none bg-transparent" />
		</div>
	);
}
