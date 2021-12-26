import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieList.scss'


function MovieList({ movies }) { 
    // let movieId = movie.id 
    

    const movieDisplayCards = movies.map((movie) => (
        <div  className='movie-list-display-card'>
            <img src={movie.movie_poster} alt={movie.title} className='movie-list-display-image' />
            <div className='movie-list-display-info'>
                <h4>{movie.title}</h4>
            </div>
            <div className='movie-list-display-summary'>
                <h4>Movie Summary:</h4>
                <p>{movie.summary}</p>
                <button>
                    <NavLink to={`/movies/${movie.id}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
           
        </div>
    ))
    return(
        // <div  className='movie-list-display-card'>
        //     <img src={moviePoster} alt={title} className='movie-list-display-image' />
        //     <div className='movie-list-display-info'>
        //         <h4>{title}</h4>
        //     </div>
        //     <div className='movie-list-display-summary'>
        //         <h4>Movie Summary:</h4>
        //         <p>{movieSummary}</p>
        //         <button>
        //             <NavLink to={`/movies/${movieId}`}>
        //                 Learn More! 
        //             </NavLink>
        //         </button>
        //     </div>
           
        // </div>
        <div className='card-container'>
            {movieDisplayCards}
        </div>
    )
}

export default MovieList;