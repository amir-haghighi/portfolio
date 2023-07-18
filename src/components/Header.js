import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const ref = useRef(null);
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
  useEffect(() => {
    let prevScroll = window.scrollY;
    const BOX = ref.current;
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (!BOX) return;
      if (prevScroll > currentScroll) {
        // user has scrolled up

        BOX.style.transform = "translateY(0)";
      } else {
        // user has scrolled down
        BOX.style.transform = "translateY(-200px)";
      }
    };
    // update previous scroll position
    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);
    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <nav>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        ref={ref}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="1280px" margin="0 auto">
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
                <a href="/#contactme-section" onClick={handleClick}>
                  Contact Me
                </a>
                <a href="/#projects-section" onClick={handleClick}>
                  Projects
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </nav>
  );
};
export default Header;
