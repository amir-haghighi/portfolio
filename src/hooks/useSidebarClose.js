import React, { useEffect, useState } from "react";

export default function useSidebarClose(sideRef, buttonRef) {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !sideRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target) &&
        isOpen
      ) {
        setisOpen((isOpen) => !isOpen);
      }
    };
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return { isOpen, setisOpen };
}
