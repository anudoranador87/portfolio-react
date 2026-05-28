const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack 
      color="black" 
      backgroundColor="white" 
      borderRadius="xl" 
      align="flex-start" 
      spacing={4}
    >
      <Image src={imageSrc} borderRadius="xl" />
      
      <VStack px={4} pb={4} align="flex-start" spacing={2}>
        {/* Fila horizontal: Título y flecha */}
        <HStack justifyContent="space-between" width="100%">
          <Heading as="h3" size="md">{title}</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
        
        {/* Descripción */}
        <Text color="#64748b" fontSize="md">{description}</Text>
      </VStack>
    </VStack>
  );
};

export default Card