import React, { useEffect, useState } from "react";
import './Associate.scss'

function Associate() {
    const [movies, setMovies] = useState([])
    const [actors, setActors] = useState([])
    const [movieId, setMovieId] = useState("")
    const [actorId, setActorId] = useState("")

    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) => { setMovies(movies);
        });
    }, []);

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) => { setActors(actors);
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault()
        const formData = {
            actor_id: actorId,
            movie_id: movieId,
        };
        fetch("/actors_movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData),
        }).then((r) => r.json())
    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="movie-select">
                <h1>Pick Movie To Associate :</h1>
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
                <div className="actor-select">
                    <h1>Pick Actor To Associate :</h1>
                        <select
                        id="actor_id"
                        name="actor_id"
                        value={actorId}
                        onChange={(e) => setActorId(e.target.value)}
                        >
                            {actors?.map((actor) => (
                                <option key={actor.id} value={actor.id}>{actor.name}</option>
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

export default Associate