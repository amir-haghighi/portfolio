import React, { useEffect, useRef, useState } from "react";
import { socials } from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";
import Hamburger from "hamburger-react";
import { useNightModeContext } from "../context/nightModeContext";
import { background } from "@chakra-ui/react";
import useHideNav from "../hooks/useHideNav";
const Sidebar = () => {
  const { nightMode } = useNightModeContext();
  const sideRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const [menuClasses, setMenuClasses] = useState(
    `${classes.hide} ${classes.menu}`
  );

  const handleClickHamburger = () => {
    console.log("clicked");
    if (!isOpen) {
      setMenuClasses(`${classes.isOpen} ${classes.menu}`);
      setisOpen((isOpen) => !isOpen);
    } else {
      setMenuClasses(`${classes.hide} ${classes.menu}`);
      setisOpen((isOpen) => !isOpen);
    }
  };
  useHideNav(buttonRef);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !sideRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target) &&
        isOpen
      ) {
        setMenuClasses(`${classes.hide} ${classes.menu}`);
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
  return (
    <div
      className={classes.sidebar}
      style={
        nightMode
          ? { color: "black", backgroundColor: "lightgray" }
          : { color: "white", backgroundColor: "#2C3440" }
      }
    >
      <div ref={buttonRef} className={`${classes.burgerButton}`}>
        <Hamburger toggled={isOpen} toggle={handleClickHamburger} size={32} />
      </div>
      <nav className={menuClasses} ref={sideRef}>
        <Link className="menu-item" to="portfolio">
          Home
        </Link>
        <Link className="menu-item" to="contact">
          Contact Me
        </Link>
        <Link className="menu-item" to="projects">
          Projects
        </Link>
        {socials.map((s) => {
          return (
            <a href={s.url} key={s.url} target="_blank">
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </a>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;
