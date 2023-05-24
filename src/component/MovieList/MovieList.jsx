import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Movie } from '..';

const MovieList = ({ movies }) => {

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={4}
      display="flex"
      justifyContent="space-between"
      overflow="auto"
      flexWrap="wrap"
      alignItems="center"
      mt={4}
    >
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
