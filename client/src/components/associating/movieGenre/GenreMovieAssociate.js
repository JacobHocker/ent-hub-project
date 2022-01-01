import React, { useState } from "react";
import './GenreMovieAssociate.scss'

function GenreMovieAssociate({ movies, genres }) {
    const [movieId, setMovieId] = useState("")
    const [genreId, setGenreId] = useState("")

    

    function handleSubmit(event) {
        event.preventDefault()
        const formData = {
            genre_id: genreId,
            movie_id: movieId,
        };
        fetch("/genres_movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData),
        }).then((r) => r.json())
    }

    return(
        <div className="form">
            <h2>Movie Genre Association Area: </h2>
            <form onSubmit={handleSubmit}>
                <div className="movie-select">
                <h2>Pick Movie To Associate :</h2>
                        <select
                        id="movie_id"
                        name="movie_id"
                        value={movieId}
                        onChange={(e) => setMovieId(e.target.value)}
                        >
                            {movies?.map((movie) => (
                                <option key={movie.id} value={movie.id}>{movie.title}</option>
                            ))}
                        </select>
                </div>
                <div className="genre-select">
                    <h2>Pick Genre To Associate :</h2>
                        <select
                        id="genre_id"
                        name="genre_id"
                        value={genreId}
                        onChange={(e) => setGenreId(e.target.value)}
                        >
                            {genres?.map((genre) => (
                                <option key={genre.id} value={genre.id}>{genre.name}</option>
                            ))}
                        </select>
                </div>
                <div className="submit-button-container">
                    <button className='submit-button' type="submit">Associate Data!</button>
                </div>
            </form>
        </div>
    )
}

export default GenreMovieAssociate