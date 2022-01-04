import React from 'react';
import { Link } from 'react-router-dom';
import './DirectorMovieDisplay.scss';

function DirectorMovieDisplay({ movies  }) {
    
    
    
    
    

    const movieShow = movies.map((movie) => (
       <div className='movie-director-display-container' key={movie.id}>
            <div className='movie-director-display-card'>
                <img className='movie-director-display-image' src={movie.movie_poster} alt={movie.title} />
                <div className='movie-director-display-info'>
                    <h3>{movie.title}</h3>
                </div>
                <div className='movie-director-display-summary'>
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
        <div className='movie-director-display'>
            {movieShow}
        </div>
    )
}

export default DirectorMovieDisplay;