import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myHead from "../images/me.jpg";
import { socials } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/LandingSection.module.css";
const greeting = "Amir Haghighi";
const bio0 = "Frontend developer";
const bio1 = "specialised in React";
const bio2 = "";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    // isDarkBackground={false}
    backgroundSize="cover"
  >
    <Avatar src={myHead} size="2xl" />

    <Heading as="h1" size="lg">
      {greeting}
    </Heading>
    <Heading as="h2" size="2xl" pt={"1rem"}>
      {bio0}
    </Heading>
    <Heading as="h2" size="lg">
      {bio1}
    </Heading>
    <Heading as="h2" size="lg">
      {bio2}
    </Heading>
    {/* <h3 Aas="h3" size="lg" className={classes.About}>
      About ME
    </h3> */}

    <div className={classes.socials}>
      {socials.map((s, i) => {
        return (
          <a href={s.url} key={s.url} target="_blank">
            <FontAwesomeIcon icon={s.icon} size="3x" />
          </a>
        );
      })}
    </div>
  </FullScreenSection>
);

export default LandingSection;
