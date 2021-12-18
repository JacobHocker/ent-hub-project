import React, { useState, useEffect } from 'react';
import './MovieActorDisplay.scss';

function MovieActorDisplay({ movieId }) {
    const [actors, setActors] = useState([])

   useEffect(() => {
        fetch(`/movies/${movieId}/actors`)
        .then((r) => r.json())
        .then((actors) => setActors(actors))
    }, [movieId])
    
    
    

    const actorShow = actors.map((actor) =>
    (
        <div className='actor-movie-display-card' key={actor.id}>
            
            <img className='actor-movie-display-image' src={actor.actor_image} alt={actor.name} />
            <h2>{actor.name}</h2>
        </div>
    ))
    
    
    return(
        <div className='actor-display'>
            {actorShow}
        </div>
    )
}

export default MovieActorDisplay;