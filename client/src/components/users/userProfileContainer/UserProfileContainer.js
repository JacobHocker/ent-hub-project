import React from 'react'
import './UserProfileContainer.scss';
import UserProfilePage from '../userProfilePage/UserProfilePage';

function UserProfileContainer({ user}) {
    
    const movieReviews = user.movie_reviews
    
    const userReviews = movieReviews.map((review) => (
        <UserProfilePage
            key={review.id}
            movieId={review.movie_id}
            movieScore={review.movie_score}
            reviewContent={review.review_content}
            createdAt={review.created_at}
            />
    ))

 
    return(
        <div className='profile-container'>
            <h1>{user.username}</h1>
            <img src={user.image_url} alt={user.username} className='profile-page-profile-pic'/>
            <h2>{user.username} Bio: </h2>
            <h3>{user.bio}</h3>
            <h1>Reviews left by {user.username}: </h1>
            {userReviews}
        </div>
    )
}

export default UserProfileContainer