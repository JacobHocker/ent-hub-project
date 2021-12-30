import React, { useState, useEffect } from 'react';

function UserProfilePage({ movieId, movieScore, reviewContent, createdAt }) {
    const [movie, setMovie] = useState({})
    
    useEffect(() => {     
        fetch(`/movies/${movieId}`)
           .then((r) => r.json())
           .then((movie) => { setMovie(movie)
           })
    }, [movieId]);
    
    return(
        <div className='profile-page-container'>
            <h1>{movie.title}</h1>
            <img src={movie.movie_poster} alt={movie.title} className='review-profile-review-movie-poster'/>
            <h3>{movieScore}</h3>
            <h3>{reviewContent}</h3>
            <p>{createdAt}</p>
        </div>
    );
};

export default UserProfilePage;