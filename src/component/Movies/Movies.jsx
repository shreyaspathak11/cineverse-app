import React, {useState, useEffect } from 'react'
import { useSelector } from 'react-redux' 
import { useGetMoviesQuery } from '../../services/TMDB'
import { MovieList } from '..'

const Movies = () => {
  const { data,error, isFetching } = useGetMoviesQuery()

  if (isFetching) {
    return <span>Loading...</span>
  }

  if (!data.results.length){
    <span>No movies found</span>  

  }
  if (error) {
    return <span>Oops, something went wrong!</span>
    
  }

  return ( 
    <div>
      <MovieList movies={data} />
    </div>
  )
}

export default Movies