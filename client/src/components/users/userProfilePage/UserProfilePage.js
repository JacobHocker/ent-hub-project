import React, { useState, useEffect } from 'react';
import './UserProfilePage.scss';

function UserProfilePage({ movieId, movieScore, reviewContent, createdAt }) {
    const [movie, setMovie] = useState({})
    
    useEffect(() => {     
        fetch(`/movies/${movieId}`)
           .then((r) => r.json())
           .then((movie) => { setMovie(movie)
           })
    }, [movieId]);
    
    return(
        <div className='profile-review-card-container'>
            <div className='profile-review-card'>
                <div className='profile-card-header'> 
                    <h3>{movie.title}</h3>
                </div>
                <div className='profile-card-image-container'>
                    <img src={movie.movie_poster} alt={movie.title} className='profile-card-movie-image'/>
                </div>
                <div className='profile-card-content'>
                    <h3>Movie Score: </h3>
                    <p>{movieScore}</p>
                    <h3>Review: </h3>
                    <p>{reviewContent}</p>
                </div>
                <div className='profile-card-footer'>
                    <h3>Posted At: </h3>
                    <p>{createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;