import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Movie = ({ movies }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)"   gap={2} >
      {movies.results.map((movie, i) => (
       
          <Box
            bg="blue.500"
            color="white"
            p={4}
            borderRadius="md"
            transition="ease 0.3s"
            
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Link to={`/movie/${movie.id}`}     
            alignItems= 'center' fontWeight= 'bolder' textDecoration= 'none' _hover= {{ cursor: 'pointer' }}>
              <img
                alt={movie.title}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : `https://via.placeholder.com/500x750?text=${movie.title}`
                }
                borderRadius= '20px' height= '300px' marginBottom= '10px' _hover={{transform: 'scale(1.05)'}}
              />
              <Text fontSize="lg" fontWeight="bold" textOverflow= 'ellipsis'   width='230px' overflow= 'hidden' whiteSpace= 'nowrap' marginTop= '10px' marginBottom= "0" textAlign='center'>
                {movie.title}
              </Text>
              <Box display='flex' mt='2' alignItems='center' _hover={{cursor: "pointer"}}>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < movie.vote_average/2   ? 'yellow.500' : 'gray.300'} 
              />
            ))}
            <Text ml={1} fontSize='sm' fontWeight='semibold' color='gray.500' >
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
