import * as React from "react";
import { VStack } from "@chakra-ui/react";
import { useNightModeContext } from "../context/nightModeContext";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { nightMode } = useNightModeContext();
  const darkMode = { color: "ivory", backgroundColor: "#050716" };
  const lightMode = { color: "black", backgroundColor: "gray.300" };

  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      {...(nightMode ? { ...darkMode } : { ...lightMode })}
    >
      <VStack width="100%" height="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
