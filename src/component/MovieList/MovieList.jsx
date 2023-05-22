import React from 'react'

const MovieList = ({movie}) => {
  return (
    <>
        {movie.result.map((movie,i) => (
            <Movie key={i} movie={movie} i={i} />
        ))}
    </>
  )
}

export default MovieList