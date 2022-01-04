import React, { useState, useEffect } from "react";
import './MovieReviewCard.scss';

function MovieReviewCard({ movieScore, reviewContent, userId, createdAt }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`/users/${userId}`)
        .then((r) => r.json())
        .then((user) => { setUser(user);
        });
    }, [userId]);

    //👎 ⭐ 👌 👍  💀 🌟

    const movieScoreSet = () => {
        if(movieScore <= 1.0) {
            return <h4 className="terrible-movie">{movieScore} 🚫</h4>
        } 
        if(movieScore >= 1.0 && movieScore <= 3.0) {
            return <h4 className="low-quality-movie">{movieScore} 👎</h4>
        } 
        if (movieScore >= 3.0 && movieScore <= 6.0) {
            return <h4 className="decent-movie">{movieScore} 👌</h4>
        } 
        if (movieScore >= 6.0 && movieScore <= 9.0) {
            return <h4 className="good-movie">{movieScore} 👍</h4>
        }
        else {
            return <h4 className="great-movie">{movieScore} ⭐</h4>
        }
    }

    return(
        <div className="review-card">
            <div className="review-header">
                <div className="card-user-image">
                    <img src={user.image_url} alt={user.username} className='review-user-pic' />
                </div>
                <div className="card-user-name">
                    <h2>{user.username}</h2>
                </div>
            </div>
            <div className="review-card-review-info">
                <div className="card-rating">
                <h2>Movie Score: </h2>
                {movieScoreSet()}
                </div>
                <div className="card-content">
                    <h2>Review: </h2>
                    <p>{reviewContent}</p>
                </div>
                <div className="card-footer">
                    <h2>Posted at: </h2>
                    <p>{createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieReviewCard;