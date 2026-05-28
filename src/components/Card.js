import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <Box 
      borderRadius="lg" 
      overflow="hidden" 
      bg="white" 
      color="black"
    >
      <Image src={imageSrc} alt={title} />
      <Box p={4}>
        <Heading size="md">{title}</Heading>
        <Text mt={2} color="gray.600">{description}</Text>
        <Link 
          href={url} 
          isExternal 
          _hover={{ textDecoration: 'none' }}
        >
          <HStack 
            mt={4} 
            color="blue.500" 
            cursor="pointer"
          >
            <Text fontWeight="bold">See more</Text>
            <ArrowForwardIcon />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;