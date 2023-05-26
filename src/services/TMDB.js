import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = '3f3165b8553303b1fb97cdda22c7758b' ;
const page = 1; 

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),

    endpoints: (builder) => ({
        // Get Movies by TYPE
              getMovies: builder.query({
                query: ({ genreIdOrCategoryName, page}) => {

                  // Get Movies by Category
                  if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                  }
          
                  // Get Movies by Genre
                  if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                  }
          
                  // Get popular movies by default
                  return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
                },
              }),

        getGenres : builder.query({
            query: () => `genre/movie/list?api_key=3f3165b8553303b1fb97cdda22c7758b`
        }),

    })
});

export const { 
    useGetMoviesQuery,
    useGetGenresQuery
 } = tmdbApi;