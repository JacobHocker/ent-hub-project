import React, {  useState } from "react";
import './DirectorMovieAssociate.scss'

function DirectorMovieAssociate({ movies, directors }) {
    const [movieId, setMovieId] = useState("")
    const [directorId, setDirectorId] = useState("")

    

    function handleSubmit(event) {
        event.preventDefault()
        const formData = {
            director_id: directorId,
            movie_id: movieId,
        };
        fetch("/directors_movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData),
        }).then((r) => r.json())
    }

    return(
        <div className="form">
            <h1>Movie Director Association Area: </h1>
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
                <div className="director-select">
                    <h1>Pick Director To Associate :</h1>
                        <select
                        id="director_id"
                        name="director_id"
                        value={directorId}
                        onChange={(e) => setDirectorId(e.target.value)}
                        >
                            {directors?.map((director) => (
                                <option key={director.id} value={director.id}>{director.name}</option>
                            ))}
                        </select>
                </div>
                <div className="submit-button">
                    <button type="submit">Associate Data!</button>
                </div>
            </form>
        </div>
    )
}

export default DirectorMovieAssociate