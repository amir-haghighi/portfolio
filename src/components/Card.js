import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/classes.css";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
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
    >
      <Image objectFit="cover" src={imageSrc} alt={title} borderRadius="10px" />
      <Heading as="h1" size="lg" p={4} pb="0">
        {title}
      </Heading>
      <Text color="gray" p={4} pl={5}>
        {description}
      </Text>
      <a
        style={{
          padding: "20px",
        }}
        href={url}
      >
        See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </a>
    </Box>
  );
};

export default Card;
