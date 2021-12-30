import React, { useState, useEffect } from "react";

function MovieReviewCard({ movieScore, reviewContent, userId, createdAt }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`/users/${userId}`)
        .then((r) => r.json())
        .then((user) => { setUser(user);
        });
    }, [userId]);

    

    return(
        <div className="review-card">
            <h3>{movieScore}</h3>
            <h3>{reviewContent}</h3>
            <img src={user.image_url} alt={user.username} className='review-user-pic' />
            <h3>{user.username}</h3>
            <p>{createdAt}</p>
        </div>
    )
}

export default MovieReviewCard;