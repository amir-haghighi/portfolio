import { useLayoutEffect } from "react";

const useHideNav = (BoxRef) => {
  useLayoutEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const BOX = BoxRef.current;

      if (!BOX) return;

      if (prevScrollPos > currScrollPos) {
        BOX.style.transform = "translateY(0)";
      } else {
        BOX.style.transform = "translateY(-200px)";
      }

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
};
export default useHideNav;
