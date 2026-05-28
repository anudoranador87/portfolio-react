import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react"; // <--- Añadido 'Text' aquí
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Jose!";
const bio1 = "Frontend Developer.";
const bio2 = "Turning user needs into elegant solutions.";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={4}>
        <Avatar src="/profile.png" size="2xl" name="Jose Aparicio" />
        <Heading as="h4" size="md">{greeting}</Heading>
        <VStack spacing={2}>
          <Heading as="h1" size="2xl">{bio1}</Heading>
          <Heading as="h1" size="2xl">{bio2}</Heading>
        </VStack>
        {/* Nueva descripción añadida aquí */}
        <Text fontSize="lg" maxW="600px" textAlign="center" mt={4}>
          Driven by UI/UX principles and product-minded design, I build responsive, 
          accessible web applications that don't just work—they perform.
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;