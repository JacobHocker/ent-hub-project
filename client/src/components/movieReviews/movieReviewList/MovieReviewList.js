import React from "react";
import MovieReviewCard from "../movieReviewCard/MovieReviewCard";
import './MovieReviewList.scss'

function MovieReviewList({ reviews }) {

    const reviewCard = reviews.map((review) => (
        <MovieReviewCard
            key={review.id}
            movieScore={review.movie_score}
            reviewContent={review.review_content}
            userId={review.user_id}
            createdAt={review.created_at}
        />
    ))
    
    
    
    return(
        <div className="movie-review-list-card">
            {reviewCard}
        </div>
    )
}

export default MovieReviewList