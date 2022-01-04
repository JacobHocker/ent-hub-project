import React, { useState } from 'react';
import './PostMovieReview.scss';

function PostMovieReview({ fixedMovieId, onAddMovieReview, fixedUserId }) {
    const [movieScore, setMovieScore] = useState("")
    const [reviewContent, setReviewContent] = useState("")
    const [movieId, setMovieId] = useState("")
    const [userId, setUserId] = useState("")

    
    function handleSubmit(event) {
        event.preventDefault()
        fetch("/movie_reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                movie_score: movieScore,
                review_content: reviewContent,
                movie_id: movieId,
                user_id: userId,                
            }),
        })
        .then((r) => r.json())
        .then((newMovieReview) => onAddMovieReview(newMovieReview))
        .then(setMovieId(fixedMovieId))
        .then(setUserId(fixedUserId))
    }

    
    
    return(
        <div className='movie-review-post-container'>
             <form onSubmit={handleSubmit} className='movie-form'>
                <div className='input-movie-review'>
                    <input 
                        className='movie-review-input'
                        type="text"
                        placeholder='Movie Review Score'
                        name='Movie Review Score'
                        value={movieScore}
                        onChange={(event) => setMovieScore(event.target.value)}
                    />
                </div>
                <div className='input-movie-review'>
                    <textarea 
                        className='movie-review-input'
                        type="text"
                        rows={5}
                        placeholder='Review...'
                        name='Review'
                        value={reviewContent}
                        onChange={(event) => setReviewContent(event.target.value)}
                    />
                </div>
                <div className='input-movie-review'>
                    <button  className='submit-button'>
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostMovieReview;