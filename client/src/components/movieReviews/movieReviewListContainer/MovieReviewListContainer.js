import React, { useState, useEffect } from 'react';
import MovieReviewList from '../movieReviewList/MovieReviewList';
import PostMovieReview from '../postMovieReviews/PostMovieReview';

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
        <div className='movie-review-list-container'>
            <h1>Parent</h1>
            <MovieReviewList reviews={reviews}/>
            <PostMovieReview onAddMovieReview={handleAddMovieReview} fixedUserId={user.id} fixedMovieId={movieId} />
        </div>
    )
}

export default MovieReviewListContainer