import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieList.scss'


function MovieList({ id, moviePoster, movie, title, summary, onDeleteMovie }) { 
    
    function handleDeleteClick() {
        fetch(`/movies/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteMovie(movie)
            }
        });
    }

    
    return(
        <div className='card-container'>
            <div key={id} className='movie-list-display-card'>
            <img src={moviePoster} alt={title} className='movie-list-display-image' />
            <div className='movie-list-display-info'>
                <h3>{title}</h3>
            </div>
            <div className='movie-list-display-summary'>
                <h4>Movie Summary:</h4>
                <p>{summary}</p>
                <div className='button-container'>
                    <button className='movie-list-button'>
                        <NavLink to={`/movies/${id}`}>
                            Learn More! 
                        </NavLink>
                    </button>
                    <button className='movie-list-button' onClick={handleDeleteClick}>
                        Delete Movie
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MovieList;