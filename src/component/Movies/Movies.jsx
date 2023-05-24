import React, { useState } from 'react';
import {
  Box,
  CircularProgress,
  Text,
} from '@chakra-ui/react';


import { MovieList } from '..';


import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {

  const { data, error, isFetching } = useGetMoviesQuery({
   
  });


  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Text variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Text>
      </Box>
    );
  }

  if (error) return 'An error has occurred.';

  return (
    <Box>
      <MovieList movies={data}  />
    </Box>
  );
}

export default Movies;
