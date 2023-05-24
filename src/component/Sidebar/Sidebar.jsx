import React from 'react';
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

const Sidebar = () => {
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
    >
      <Flex
        align="center"
        justify="center"
        h="20"
        borderBottom="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      <Flex direction="column" p="4">
        <NavItem>Home</NavItem>
        <NavItem>Trending</NavItem>
        <NavItem>Explore</NavItem>
        <NavItem>Favourites</NavItem>
        <NavItem>Settings</NavItem>
      </Flex>
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
