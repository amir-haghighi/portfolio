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
import useHideNav from "../hooks/useHideNav";

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
export const navItems = [
  { name: "home", to: "/" },
  { name: "Contact Me", to: "contact" },
  { name: "Projects", to: "projects" },
  { name: "About Me", to: "about" },
];

const Navbar = () => {
  const { nav } = useNightModeContext();
  const BoxRef = useRef(null);
  const { nightMode, toggleNightMode } = useNightModeContext();
  useHideNav(BoxRef);
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

  return (
    <header>
      <Sidebar />
      <Box className={classes.outerBox} ref={BoxRef} style={nav}>
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
            {navItems.map((item, i) => {
              return (
                <Link to={item.to} key={item.to}>
                  {item.name}
                </Link>
              );
            })}
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
      <div style={{ marginBottom: "0px" }} />{" "}
    </header>
  );
};
export default Navbar;
