import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc, url, ...otherProps }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box
      m="0"
      borderWidth="0"
      backgroundColor="chakra-body-bg"
      color="black"
      borderRadius="10px"
      pb={3}
      width="80vw"
      {...otherProps}
    >
      <Image
        objectFit="cover"
        src={imageSrc}
        alt={title}
        borderRadius="10px 10px 0 0 "
        height="60vh"
        maxHeight="800px"
        width="100%"
        borderBottom="2px solid black"
      />

      <Heading as="h1" size="lg" p={4} pb="0">
        {title}
      </Heading>
      <Text color="gray" p={4} pl={5}>
        {description}
      </Text>
      <Link
        style={{
          padding: "20px",
        }}
        href={url}
        transition="all 0.2s ease-in-out"
        display="inline-block"
        _hover={{ transform: "scale(1.1)" }}
      >
        See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Link>
    </Box>
  );
};

export default Card;
