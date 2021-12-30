import React, { useState, useEffect } from "react";
import MovieList from "../movieList/MovieList";
import MovieSearchBar from "../searchBar/MovieSearchBar";
import './MovieListContainer.scss'


function MovieListContainer() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState("")
   
    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) => { setMovies(movies);
        });
    }, []);

    const moviesToDisplay = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

    
    function handleDeleteMovie(id) {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);
    };

    const movieCards = moviesToDisplay.map((movie) => (
        <MovieList
            key={movie.id}
            onDeleteMovie={handleDeleteMovie}
            movie={movie}
            moviePoster={movie.movie_poster}
            id={movie.id}
            title={movie.title}
            summary={movie.summary}
            />
    ))

   
    return(
        <div className='movie-list-page'>
            <MovieSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm}  />
            <div className="movie-list-container">
                {movieCards}
            </div>
        </div>
    )
};

export default MovieListContainer;