import React from 'react';
import { Box, Divider, Flex, Text, VStack, useColorModeValue, Spinner, Image, Link  } from '@chakra-ui/react';
import { useGetGenresQuery } from '../../services/TMDB';

import { useDispatch, useSelector } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from "../../assets/genres";

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory); 
 

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
      overflowY="scroll" // Fix typo, should be "scroll" instead of "auto"
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
        {categories.map(({ label, value }) => (
          <Flex w={'100%'} >
            <NavItem onClick={() => dispatch(selectGenreOrCategory(value))}>
              <Image src={genreIcons[label.toLowerCase()]} height={30} />
              <Text>{label}</Text>
            </NavItem>
          </Flex>
        ))}

        <Divider my={2} />
        <Text fontWeight="bold" color="gray.400">
          GENRES
        </Text>

        {isFetching ? (
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="red.500" size="xl" /> // Loader
        ) : (
          <VStack spacing={2} align="start">
            {data.genres.map(({ name, id }) => (
              <Flex w={'100%'}> 
                <NavItem onClick={() => dispatch(selectGenreOrCategory(id))}>
                  <Image src={genreIcons[name.toLowerCase()]} height={30} />
                  <Text>{name}</Text>
                </NavItem>
              </Flex>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const NavItem = ({ children, onClick }) => {
  return (
    <Link

      textDecoration="none"
      _focus={{ boxShadow: 'none' }}
      py={2}
      px={4}
      my={1}
      display="flex" // Set display to "flex"
      alignItems="center" // Align items vertically in the center
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Sidebar;
