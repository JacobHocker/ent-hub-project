import React from 'react';
import PostAMovie from '../moviePost/PostAMovie';
import PostAnActor from '../actorPost/PostAnActor';

function PostContainer() {
    return(
        <div className='posting-container'>
            <div className='movie-post'>
                <h1>Post A Movie</h1>
               <PostAMovie /> 
            </div>
            <div className='actor-post'>
                <h1>Post A Actor</h1>
                <PostAnActor />
            </div>
        </div>
    )
}

export default PostContainer;