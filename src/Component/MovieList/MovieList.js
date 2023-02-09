import './MovieList.css'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies,InputSearch}) => {
  return (
    <div className='list-flex'>
        {movies
        .filter(movie=> movie.title.toUpperCase().includes(InputSearch.toUpperCase()))
        .map(movie=> <MovieCard movie={movie} key={movie.id} />)}
    </div>
  )
}

export default MovieList