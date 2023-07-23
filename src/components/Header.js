import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useLatestRef } from "@chakra-ui/react";

import DarkModeToggle from "react-dark-mode-toggle";
import { useNightModeContext } from "../context/nightModeContext";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hagh73h@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/amir-haghighi",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/hosein-haghighi",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@hagh73h",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/5578365/amir-haghighi",
  },
];

const Header = () => {
  const BoxRef = useRef(null);
  const { nightMode, toggleNightMode } = useNightModeContext();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useLayoutEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const BOX = BoxRef.current;

      if (!BOX) return;

      if (prevScrollPos > currScrollPos) BOX.style.transform = "translateY(0)";
      else BOX.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        ref={BoxRef}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        textAlign="center"
        color={nightMode ? "black" : "white"}
        backgroundColor={nightMode ? "whiteAlpha.800" : "#2C3440"}
      >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((s) => {
              return (
                <a href={s.url} style={{ marginRight: "2rem" }} key={s.url}>
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </a>
              );
            })}
          </nav>

          <nav>
            <HStack spacing={8}>
              <a href="#contactme-section" onClick={handleClick}>
                Contact Me
              </a>
              <a href="#projects-section" onClick={handleClick}>
                Projects
              </a>
              <DarkModeToggle
                onChange={toggleNightMode}
                checked={nightMode}
                size={80}
                justifySelf="end"
              />
            </HStack>
          </nav>
        </HStack>
      </Box>
    </nav>
  );
};
export default Header;
