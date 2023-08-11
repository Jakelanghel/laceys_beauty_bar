import { useState, useEffect } from "react";

export const useSetView = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Update the isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
