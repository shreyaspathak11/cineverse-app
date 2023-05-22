import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux' 
import { useGetMoviesQuery } from '../../services/TMDB'
import MovieList from '..'

const Movies = () => {
  const { data } = useGetMoviesQuery()

  console.log(data)
  return ( 
    <div>
      <MovieList movie={data} />
    </div>
  )
}

export default Movies