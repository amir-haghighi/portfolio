import React from "react";
import FullScreenSection from "../components/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "../components/Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "this is an static one page html css with grids and flexbox only . nothing more",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://amir-haghighi.github.io/little-lemon-restaurant",
  },
  {
    title: "Doggos App",
    description: "you can see dogs breads in here by your choice",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://amir-haghighi.github.io/dogapp",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "#",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "#",
  },
];

const ProjectsPage = () => {
  return (
    <FullScreenSection
      isDarkBackground
      m="auto"
      pt={24}
      pb={4}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
      height="auto"
    >
      <Heading as="h1" pl={10}>
        Featured Projects
      </Heading>
      <Box
        display="flex"
        justifyContent="space-around"
        gap="2rem"
        flexWrap="wrap"
      >
        {projects.map((project) => {
          return (
            <Card
              maxWidth="920px"
              url={project.url}
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          );
        })}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsPage;
