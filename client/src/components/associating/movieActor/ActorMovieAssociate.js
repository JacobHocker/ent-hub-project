import React, {  useState } from "react";
import './ActorMovieAssociate.scss'

function ActorMovieAssociate({ movies, actors }) {
    const [movieId, setMovieId] = useState("")
    const [actorId, setActorId] = useState("")

    const optionStyle = {}

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
            <h2>Actor Movie Association Area: </h2>
            <form onSubmit={handleSubmit}>
                <div className="movie-select">
                <h2>Pick Movie To Associate :</h2>
                        <select
                        id="select"
                        name="movie_id"
                        value={movieId}
                        onChange={(e) => setMovieId(e.target.value)}
                        >
                            {movies?.map((movie) => (
                                <option key={movie.id}  className='option' value={movie.id}>{movie.title}</option>
                            ))}
                        </select>
                </div>
                <div className="actor-select">
                    <h2>Pick Actor To Associate :</h2>
                        <select
                        id="actor-id"
                        name="actor_id"
                        value={actorId}
                        onChange={(e) => setActorId(e.target.value)}
                        >
                            {actors?.map((actor) => (
                                <option key={actor.id} className='actor-dropdown' value={actor.id}>{actor.name}</option>
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

export default ActorMovieAssociate