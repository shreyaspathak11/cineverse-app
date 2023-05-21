import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const navbarBg = useColorModeValue('white', 'gray.800');
  const navbarColor = useColorModeValue('gray.800', 'white');

  return (
    <>
      <Flex as="nav" align="center" py={4} px={6} shadow="md" bg={navbarBg} color={navbarColor}>
        {/* Logo */}
        <Box mr={4}>
          <Text fontSize="4xl" fontWeight="bold" fontFamily={"Bebas Neue"} color={"red.400"}>
            CINEVERSE
          </Text>
        </Box>

        <Spacer />

        {/* Search Bar */}
        <InputGroup flex={1} maxW="md">
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="text" placeholder="Search..." />
        </InputGroup>

        <Spacer />
        <Flex ml="auto" align="center" flexShrink={0}>
          {/* Avatar and Profile */}
          <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />



          {/* Color Mode Switcher */}
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
          />
        </Flex>

        {/* Toggle Menu */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Toggle menu"
          ml={4}
          display={{ base: 'block', md: 'none' }}
          onClick={toggleSidebar}
        />
      </Flex>

      {/* Sidebar */}
      
    </>
  );
};

export default Navbar;
