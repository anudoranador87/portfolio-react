import React from "react";
import { Box, Flex, Text, IconButton, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={8}>
      <Flex 
        direction={{ base: "column", md: "row" }} 
        justify="space-between" 
        align="center" 
        maxW="1000px" 
        mx="auto" 
        px={6}
      >
        <Text mb={{ base: 4, md: 0 }} fontSize="sm">
          © {new Date().getFullYear()} Jose María Aparicio | Frontend Developer
        </Text>
        
        <HStack spacing={6}>
          <Link href="https://github.com/anudoranador87" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} variant="ghost" _hover={{ color: "cyan.400" }} />
          </Link>
          <Link href="https://linkedin.com/in/tu-perfil" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} variant="ghost" _hover={{ color: "blue.400" }} />
          </Link>
          <Link href="mailto:tu-email@ejemplo.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} variant="ghost" _hover={{ color: "red.400" }} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;