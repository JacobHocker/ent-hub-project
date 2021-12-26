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

  
  

   
    return(
        <div className='movie-list-page'>
            <MovieSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm}  />
            <div className="movie-list-container">
                <MovieList movies={moviesToDisplay} />
            </div>
        </div>
    )
};

export default MovieListContainer;