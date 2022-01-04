import React from 'react';
import { Link } from 'react-router-dom';
import './ActorMovieDisplay.scss';

function ActorMovieDisplay({ movies  }) {
    
    
    
    

    const movieShow = movies.map((movie) => (
       <div className='movie-actor-display-container' key={movie.id}>
            <div className='movie-actor-display-card'>
                <img className='movie-actor-display-image' src={movie.movie_poster} alt={movie.title} />
                <div className='movie-actor-display-info'>
                    <h3>{movie.title}</h3>
                </div>
                <div className='movie-actor-display-summary'>
                    <h3>Movie Summary: </h3>
                    <p>{movie.summary}</p>
                    <Link to={`/movies/${movie.id}`} >
                        <button className='movie-info-button'>
                            Learn More!
                        </button>
                    </Link>
                </div>   
            </div>
        </div>
    ))
    
    
    return(
        <div className='movie-actor-display'>
            {movieShow}
        </div>
    )
}

export default ActorMovieDisplay;