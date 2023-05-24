import React from 'react';
import { Box, Divider, Flex, Link, Text, VStack, useColorModeValue, Spinner } from '@chakra-ui/react';
import { useGetGenresQuery } from '../../services/TMDB';

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      w="60"
      h="100vh"
      borderRight="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      position="fixed"
      top="0"
      left="0"
      overflowY="auto" // Add scrollable feature
    >
      <Flex
        align="center"
        justify="center"
        h="20"
        borderBottom="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Text fontSize="4xl" fontFamily="Bebas Neue" textAlign="center" color="red.400">
          CINEVERSE
        </Text>
      </Flex>
      <VStack spacing={3} align="start" px={4} mt={4}>
        <Text fontWeight="bold" color="gray.400">
          DISCOVER
        </Text>
        <NavItem>Popular</NavItem>
        <NavItem>Top Rated</NavItem>
        <NavItem>Upcoming</NavItem>
      
        <Divider my={2} />
        <Text fontWeight="bold" color="gray.400">
          GENRES
        </Text>

        {isFetching ? (
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="red.500" size="xl" /> // Loader
        ) : (
          data.genres.map(({ name, id }) => (
            <NavItem key={name} onClick={() => {}}>
              {name}
            </NavItem>
          ))
        )}
      </VStack>
    </Box>
  );
};

const NavItem = ({ children }) => {
  return (
    <Link
      href="#"
      textDecoration="none"
      _focus={{ boxShadow: 'none' }}
      py={2}
      px={4}
      my={1}
      borderRadius="md"
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  );
};

export default Sidebar;
