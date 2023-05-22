import React from 'react'
import { Movie } from '..'

const MovieList = ({ movies }) => {
  return (
    <>
        {movies.results.map((movie,i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </>
  )
}

export default MovieList