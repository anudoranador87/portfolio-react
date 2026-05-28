import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";

const projects = [
  {
    title: "LostDesk",
    description: "Hotel lost and found management system. Developed with React and Supabase, featuring specialized access roles for Reception and Housekeeping teams.",
    getImageSrc: () => require("../images/photo1.png"),
    url: "https://lostdesk-react-x3dk.vercel.app/", // Añadida URL
  },
  {
    title: "TriviaShift 🎯",
    description: "A two-player trivia game built on a 3×3 grid. Features professional scenarios for staff training, DOM manipulation, and custom game logic in Vanilla JS.",
    getImageSrc: () => require("../images/photo3.png"),
    url: "https://anudoranador87.github.io/Trivial-shift/", // Añadida URL
  },
  {
    title: "Campus & Crema",
    description: "University cafeteria web application migrated from Vanilla JavaScript to React, featuring component-based architecture and mobile-first design.",
    getImageSrc: () => require("../images/photo2.png"),
    url: "https://campus-crema-react.vercel.app", // Añadida URL
  },
  {
    title: "Mi Camino Web 365",
    description: "A year-long, public learning journey documenting my transition into development. This repository serves as a transparent proof-of-work, tracking my daily progress, technical breakthroughs, and the evolution of my coding mindset.",
    getImageSrc: () => require("../images/photo4.png"),
    url: "https://anudoranador87.github.io/Mi-Camino-Web-365/", // Añadida URL
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url} // <-- Asegúrate de pasar la prop url aquí
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;