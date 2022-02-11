import { useEffect, useMemo, useState } from "react";

export const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
  const [width, setWidth] = useState(0);
  const [isCompact, setIsCompact] = useState<boolean>();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("resize", handleResize);
      handleResize();
      setIsCompact(width < MOBILE_BREAKPOINT);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [width]);

  return useMemo(() => isCompact, [isCompact]);
};

export default useIsMobile;
