import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";
import './MovieListContainer.scss'


function MovieListContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) => { setMovies(movies);
        });
    }, []);

    

  
    const moviesToDisplay = movies.map((movie) =>  (
        <MovieList 
            key={movie.id}
            title={movie.title}
            moviePoster={movie.movie_poster}
            movieSummary={movie.summary}
            movie={movie}
        />

    ))

   
    return(
        <div className='movie-list-container'>
            {moviesToDisplay}
        </div>
    )
};

export default MovieListContainer;