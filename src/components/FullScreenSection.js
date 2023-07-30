import * as React from "react";
import { VStack, background } from "@chakra-ui/react";
import { useNightModeContext } from "../context/nightModeContext";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  const { nightMode, color, backgroundColor } = useNightModeContext();
  return (
    <VStack color={color} backgroundColor={backgroundColor}>
      <VStack width="100%" height="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
