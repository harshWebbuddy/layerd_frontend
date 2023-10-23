"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Popup from "./Popup";

export default function BrainButton() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	return (
		<div className="relative" onClick={() => setIsPopupOpen(true)}>
			<button>
				<Image src="/main/brain.svg" alt="brain" width={20} height={20} />
			</button>
			<Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
		</div>
	);
}
