import { useState } from "react";

const initializeState = () => {
	if (window.innerWidth < 1024) {
		return false;
	} else {
		return true;
	}
};

let initialState = initializeState();

export function useExpandedState() {
	const [isExpanded, setIsExpanded] = useState(initialState);

	const expand = () => {
		setIsExpanded(true);
	};

	const collapse = () => {
		setIsExpanded(false);
	};

	const toggle = () => {
		setIsExpanded((prev) => !prev);
	};

	return {
		isExpanded,
		expand,
		collapse,
		toggle,
	};
}
