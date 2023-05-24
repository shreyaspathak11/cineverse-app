import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Movie = ({ movies }) => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, xl: 4 });

  return (
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={2}
      pt={10}
      pl={60}
      className="fade-in-grid"
      style={{ position: 'relative' }}
    >
      {movies.results.map((movie, i) => (
        <Box
          key={i}
          color="white"
          p={4}
          borderRadius="sm"
          transition="ease 0.3s"
          _hover={{ transform: 'scale(1.05)' }}
          className="fade-in-box"
          style={{
            animationDelay: `${(i + 1) * 0.25}s`,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Link to={`/movie/${movie.id}`}>
            <img
              alt={movie.title}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://via.placeholder.com/500x750?text=${movie.title}`
              }
            />
            <Text
              fontSize="lg"
              fontWeight="bold"
              textColor={'blackAlpha.900'}
              textOverflow="ellipsis"
              width="230px"
              overflow="hidden"
              whiteSpace="nowrap"
              marginTop="10px"
              marginBottom="0"
              textAlign="center"
            >
              {movie.title}
            </Text>
            <Box display="flex" mt="2" alignItems="center" _hover={{ cursor: 'pointer' }}>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon key={i} color={i < movie.vote_average / 2 ? 'yellow.500' : 'gray.300'} />
                ))}
              <Text ml={1} fontSize="sm" fontWeight="semibold" color="gray.500">
                {movie.vote_average}
              </Text>
            </Box>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default Movie;
