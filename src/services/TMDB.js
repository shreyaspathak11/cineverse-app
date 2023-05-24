import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.TMDB_API_KEY;
const page = 1; 
//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),

    endpoints: (builder) => ({
        // Get Movies by TYPE
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=3f3165b8553303b1fb97cdda22c7758b`
            }),
            // GET Movies by GENRE
        getGenres : builder.query({
            query: () => `genre/movie/list?api_key=3f3165b8553303b1fb97cdda22c7758b`
        }),

    })
});

export const { 
    useGetMoviesQuery,
    useGetGenresQuery
 } = tmdbApi;