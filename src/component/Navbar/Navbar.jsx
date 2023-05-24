import React from 'react';
import { Box, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ onOpen }) => {
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
      <Text fontSize="2xl" fontWeight="bold">
        Logo
      </Text>
      <Box></Box>
    </Flex>
  );
};

export default Navbar;
