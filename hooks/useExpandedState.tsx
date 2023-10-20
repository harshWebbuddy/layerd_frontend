import { useState } from 'react';

export function useExpandedState(initialState = true) {
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
