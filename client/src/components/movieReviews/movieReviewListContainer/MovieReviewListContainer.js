import React, { useState, useEffect } from 'react';
import MovieReviewList from '../movieReviewList/MovieReviewList';
import PostMovieReview from '../postMovieReviews/PostMovieReview';
import './MovieReviewListContainer.scss'

function MovieReviewListContainer({ movieId, reviews }) {
    const [movieReviews, setMovieReviews] = useState([])
    const [user, setUser] = useState([]);

    

    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, []);

    useEffect(() => {
        fetch("/movie_reviews")
        .then((r) => r.json())
        .then((movieReviews) => { setMovieReviews(movieReviews);
        });
    }, []);
    
    function handleAddMovieReview(newMovieReview) {
        const updatedMovieReviews = [...movieReviews, newMovieReview]
        setMovieReviews(updatedMovieReviews)
    }


    return(
        <div className='movie-review-list-page'>
            <div className='movie-review-list-container'>
                <MovieReviewList reviews={reviews}/>
            </div>
            <div className='movie-review-post-container'>
                <h3>Leave A Review: </h3>
                <PostMovieReview onAddMovieReview={handleAddMovieReview} fixedUserId={user.id} fixedMovieId={movieId} />
            </div>
        </div>
    )
}

export default MovieReviewListContainer