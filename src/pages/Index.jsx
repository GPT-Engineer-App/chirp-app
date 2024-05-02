import { Box, Flex, Text, VStack, Input, Button, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaUserAlt, FaEllipsisH } from 'react-icons/fa';

const Index = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <Flex height="100vh" overflow="hidden">
      {/* Navigation Sidebar */}
      <VStack
        spacing={4}
        align="stretch"
        width={isLargerThan1280 ? "15%" : "10%"}
        bg="blue.500"
        color="white"
        padding={4}
      >
        <IconButton icon={<FaTwitter />} variant="ghost" aria-label="Twitter" fontSize="2xl" />
        <IconButton icon={<FaHome />} variant="ghost" aria-label="Home" fontSize="2xl" />
        <IconButton icon={<FaHashtag />} variant="ghost" aria-label="Explore" fontSize="2xl" />
        <IconButton icon={<FaBell />} variant="ghost" aria-label="Notifications" fontSize="2xl" />
        <IconButton icon={<FaEnvelope />} variant="ghost" aria-label="Messages" fontSize="2xl" />
        <IconButton icon={<FaUserAlt />} variant="ghost" aria-label="Profile" fontSize="2xl" />
        <IconButton icon={<FaEllipsisH />} variant="ghost" aria-label="More" fontSize="2xl" />
      </VStack>

      {/* Main Feed */}
      <VStack
        spacing={4}
        width={isLargerThan1280 ? "50%" : "75%"}
        padding={4}
        overflowY="auto"
      >
        <Text fontSize="2xl" fontWeight="bold">Home</Text>
        <Input placeholder="What's happening?" />
        <Button colorScheme="blue">Tweet</Button>
        {/* Placeholder for tweets */}
        <Box border="1px" borderColor="gray.200" padding={4}>
          <Text fontWeight="bold">John Doe</Text>
          <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
        </Box>
      </VStack>

      {/* Trends Sidebar */}
      <VStack
        spacing={4}
        width={isLargerThan1280 ? "35%" : "15%"}
        padding={4}
        overflowY="auto"
      >
        <Text fontSize="2xl" fontWeight="bold">Trends for you</Text>
        {/* Placeholder for trends */}
        <Box border="1px" borderColor="gray.200" padding={4}>
          <Text>#TrendingTopic</Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;