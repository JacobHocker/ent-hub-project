import React from 'react';
import { Link } from 'react-router-dom';
import './MovieGenreDisplay.scss'

function MovieGenreDisplay({ movies  }) {
    

    const movieShow = movies.map((movie) => (
       <div className='movie-genre-display-container' key={movie.id}>
            <div className='movie-genre-display-card'>
                <img className='movie-genre-display-image' src={movie.movie_poster} alt={movie.title} />
                <div className='movie-genre-display-info'>
                    <h3>{movie.title}</h3>
                </div>
                <div className='movie-genre-display-summary'>
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
        <div className='movie-genre-display'>
            {movieShow}
        </div>
    )
}

export default MovieGenreDisplay;