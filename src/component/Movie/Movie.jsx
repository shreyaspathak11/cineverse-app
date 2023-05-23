import React from 'react'


const Movie = ({movie, i }) => {
    console.log(movie,i)
  return (
    <div>
        <h1>
        {i}
    {movie.title}
        </h1>
    </div>
  )
}

export default Movie