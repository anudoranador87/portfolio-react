import React from "react";
import { Box, Heading, Text, HStack, Badge } from "@chakra-ui/react";

const TechStackSection = () => {
  // Definimos las tecnologías con sus colores asociados
  const technologies = [
    { name: "React", color: "cyan" },
    { name: "JavaScript (ES6+)", color: "yellow" },
    { name: "Tailwind CSS", color: "teal" },
    { name: "Supabase", color: "green" },
  ];

  return (
    <Box p={8} bg="gray.50" textAlign="center">
      <Heading size="lg" mb={4} color="gray.800">
        My Tech Stack
      </Heading>
      <Text color="gray.600" maxW="600px" mx="auto" mb={6}>
        I specialize in the React ecosystem. I have chosen these tools because they 
        prioritize development speed, user performance, and long-term code maintainability.
      </Text>
      <HStack spacing={4} mt={4} justify="center" flexWrap="wrap">
        {technologies.map((tech) => (
          <Badge 
            key={tech.name} 
            p={2} 
            borderRadius="md" 
            colorScheme={tech.color} 
            fontSize="md"
            variant="solid" // Esto hace que el color se vea más lleno y profesional
          >
            {tech.name}
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};

export default TechStackSection;