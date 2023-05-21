import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/react';

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
  FiSun,
  FiMoon
} from 'react-icons/fi';


const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Categories', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favorites', icon: FiStar },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box minH="100vh" bg={bg}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full" >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  const bgBox = useColorModeValue('white', 'gray.900');

  return (
    <Box transition="3s ease" bg={bgBox} borderRight="1px" borderRightColor={useColorModeValue('gray.200', 'gray.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="4xl" fontFamily="Bebas Neue" textAlign="center" color="red.400">
          CINEVERSE
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <VStack spacing={2} mt={8} alignItems="start" ml={4}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </VStack>
    </Box>
  );
};

const NavItem = ({ icon, children }) => {
  return (
    <Link  style={{ textDecoration: 'none' }}>
      <Flex align="center" p="4"  mx="4" borderRadius="lg" role="group" cursor="pointer"
        _hover={{ bg: 'red.400', color: 'white',}}>
        {icon && (
          <Icon mr="4" fontSize="16" _groupHover={{ color: 'white'}} as={icon} />
        )}
        <Text fontSize="md" fontWeight="medium">
          {children}
        </Text>
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <Flex ml={{ base: 0, md: 60 }} px={{ base: 4, md: 4 }} height="20" alignItems="center" bg={bg} borderBottomWidth="1px"  borderBottomColor={borderColor} justifyContent={{ base: 'space-between', md: 'flex-end' }}>
{/* Menu on mobile mode */}
      <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen}  variant="outline" aria-label="open menu" 
      icon={<FiMenu />} />

      <Text display={{ base: 'flex', md: 'none' }} fontSize="4xl" fontFamily="Bebas Neue" textAlign="center" color="red.400">
        CINEVERSE
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" aria-label="Toggle Color Mode" onClick={toggleColorMode}
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        />

{/* Avatar Section and Profile Sign out menu */}

        <Flex alignItems="center">
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }} >
              <HStack>
                <Avatar bg="teal.500" />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                </VStack>
                
              </HStack>
            </MenuButton>
            <MenuList bg={bg} borderColor={borderColor}>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
