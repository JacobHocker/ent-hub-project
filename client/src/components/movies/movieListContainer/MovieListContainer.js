import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";


function MovieListContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) =>  setMovies(movies))
    }, [])



  
    const moviesToDisplay = movies.map((movie) =>  (
        <MovieList
            key={movie.id}
            title={movie.title}
            moviePoster={movie.movie_poster}
            movieId={movie.id}
            movie={movie}
        />

    ))

   
    return(
        <div className='movie-display-list'>
            {moviesToDisplay}
        </div>
    )
};

export default MovieListContainer;