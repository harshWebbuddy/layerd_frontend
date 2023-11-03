import { useState, useEffect } from "react";

const initializeState = () => {
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return false;
  } else {
    return true;
  }
};

export function useExpandedState() {
  const [isExpanded, setIsExpanded] = useState(initializeState);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
