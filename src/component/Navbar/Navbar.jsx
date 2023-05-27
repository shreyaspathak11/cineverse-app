import React from 'react';
import { Avatar, Box, Flex, HStack, IconButton, Spacer, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
   

  return (
    <Flex
      align="center"
      justify="space-between"
      px={4}
      py={2}
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderBottom="1px"
      h="20"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <IconButton
        icon={<FiMenu />}
        aria-label="Open Sidebar"
        onClick={onOpen}
      />
    <Spacer />
      <HStack spacing={{ base: '0', md: '6' }} >
        <IconButton
          size="sm"
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        />

        {/* Avatar Section */}
        <Avatar bg="teal.500" />
      </HStack>
      <Box></Box>
    </Flex>
  );
};

export default Navbar;
