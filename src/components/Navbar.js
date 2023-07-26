import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useNightModeContext } from "../context/nightModeContext";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import classes from "../styles/navbar.module.css";

export const socials = [
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

const Navbar = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const BoxRef = useRef(null);
  const { nightMode, toggleNightMode } = useNightModeContext();

  // const handleClick = (anchor) => () => {
  //   const id = `${anchor}-section`;
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
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
  });
  return (
    <header>
      <Sidebar />
      <Box
        className={classes.outerBox}
        ref={BoxRef}
        style={
          nightMode
            ? { color: "black", backgroundColor: "lightgray" }
            : { color: "white", backgroundColor: "#2C3440" }
        }
      >
        <div className={classes.nav}>
          <nav className={classes.navItems}>
            {socials.map((s) => {
              return (
                <a href={s.url} key={s.url} target="_blank">
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav className={classes.navItems}>
            <Link to="/portfolio">Home</Link>
            <Link to="contact">Contact Me</Link>
            <Link to="projects">Projects</Link>
            <div style={{ display: "block" }}>
              <DarkModeToggle
                onChange={toggleNightMode}
                checked={nightMode}
                size={80}
                justifySelf="end"
              />
            </div>
          </nav>
        </div>
      </Box>
      <div style={{ marginBottom: "65px" }} />{" "}
    </header>
  );
};
export default Navbar;
