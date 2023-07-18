import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myHead from "../images/me-head.png";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src={myHead} size="2xl" />
    <Heading as="h1" size="md" pt={"1rem"}>
      {greeting}
    </Heading>
    <Heading as="h2" size="3xl" pt={"2rem"}>
      {bio1}
    </Heading>
    <Heading as="h2" size="3xl" pt={"1rem"}>
      {bio2}
    </Heading>
  </FullScreenSection>
);

export default LandingSection;
