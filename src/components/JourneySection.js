import React from "react";
import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const JourneySection = () => {
  return (
    <Box p={10} bg="white" color="gray.800">
      <Container maxW="container.md">
        <VStack spacing={4} align="flex-start">
          <Heading size="lg">My 365-Day Coding Journey</Heading>
          <Text fontSize="lg" color="gray.600">
            From hotel management to frontend engineering.
          </Text>
          <Text>
            My transition into technology wasn't just about learning syntax; 
            it was about applying operational logic to software solutions. 
            Over the past year, I have documented my progress daily, focusing on:
          </Text>
          <Box pl={4} borderLeft="4px solid #14532d">
            <Text fontWeight="bold">The Mindset:</Text>
            <Text mb={2}>Solving real-world friction in hotel operations through clean, scalable code.</Text>
            <Text fontWeight="bold">The Technical Focus:</Text>
            <Text>Moving from Vanilla JS fundamentals to component-based architectures in React and Supabase.</Text>
          </Box>
          <Text fontStyle="italic" color="gray.500">
            "Every line of code is a chance to improve a user's experience."
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default JourneySection;