import { useState } from 'react';

function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  return { isExpanded, setIsExpanded };
}

export default useSidebar;