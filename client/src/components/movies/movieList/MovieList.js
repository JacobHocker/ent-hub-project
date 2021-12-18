import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieList.scss'


function MovieList({ title, moviePoster, movie, movieSummary }) { 
    let movieId = movie.id 
    
    return(
        <div  className='movie-list-display-card'>
            <img src={moviePoster} alt={title} className='movie-list-display-image' />
            <div className='movie-list-display-info'>
                <h4>{title}</h4>
            </div>
            <div className='movie-list-display-summary'>
                <h4>Movie Summary:</h4>
                <p>{movieSummary}</p>
                <button>
                    <NavLink to={`/movies/${movieId}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
           
        </div>
    )
}

export default MovieList;