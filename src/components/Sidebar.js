import React, { useEffect, useRef, useState } from "react";
import { navItems, socials } from "./Navbar";

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
import useSidebarClose from "../hooks/useSidebarClose";
const Sidebar = () => {
  const refs = useRef([]);
  const { nav } = useNightModeContext();
  const sideRef = useRef(null);
  const buttonRef = useRef(null);
  const { isOpen, setisOpen } = useSidebarClose(sideRef, buttonRef);
  useHideNav(buttonRef);
  let menuClasses = "";
  if (isOpen) {
    menuClasses = `${classes.isOpen} ${classes.menu}`;
  } else {
    menuClasses = `${classes.hide} ${classes.menu}`;
  }
  const handleClickHamburger = () => {
    if (!isOpen) {
      setisOpen((isOpen) => !isOpen);
    } else {
      setisOpen((isOpen) => !isOpen);
    }
  };

  return (
    <div className={classes.sidebar} style={nav}>
      <div ref={buttonRef} className={`${classes.burgerButton}`}>
        <Hamburger toggled={isOpen} toggle={handleClickHamburger} size={32} />
      </div>
      <nav
        className={menuClasses}
        ref={sideRef}
        onClick={() => {
          setisOpen(false);
        }}
      >
        {navItems.map((item, i) => {
          return (
            <Link className="menu-item" to={item.to} key={item.to}>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;
