import React from 'react';
import { NavLink } from 'react-router-dom';


function MovieList({ title, moviePoster, movie }) { 
    let movieId = movie.id 
     
    return(
        <div  className='movie-list-display-cards'>
            <img src={moviePoster} alt={title} className='movie-list-image' />
            <h1>{title}</h1>
            <button className='link-to-movie'>
               <NavLink to={`/movies/${movieId}`}> 
                Learn more!
                </NavLink>
            </button>
        </div>
    )
}

export default MovieList;