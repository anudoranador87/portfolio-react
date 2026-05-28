const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      {/* 1. Avatar */}
      <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
      
      {/* 2. Greeting */}
      <Heading as="h4" size="md">{greeting}</Heading>
      
      {/* 3. Bios */}
      <VStack spacing={2}>
        <Heading as="h1" size="2xl">{bio1}</Heading>
        <Heading as="h1" size="2xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection