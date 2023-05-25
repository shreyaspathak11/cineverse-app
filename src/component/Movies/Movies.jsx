import React, { useState } from 'react';
import {
  Box,
  CircularProgress,
  Text,
} from '@chakra-ui/react';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { Movie } from '..';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

function Movies() {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory); 
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page});


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
      <Movie movies={data}  />
    </Box>
  );
}

export default Movies;
