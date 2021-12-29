import React, { useState } from 'react';
import './MovieEditor.scss'

function MovieEditor({ movies, onUpdateMovie }) {
    const [movieId, setMovieId] = useState("")
    const [moviePoster, setMoviePoster] = useState("");
    const [grossWorldwide, setGrossWorldwide] = useState("");
       

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/movies/${movieId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                movie_poster: moviePoster,
                gross_worldwide: grossWorldwide,
            }),
        })
        .then((r) => r.json())
        .then((updatedMovie) => onUpdateMovie(updatedMovie));
    };
    
    

    return(
        <div className='editor-container'>
        <div className="movie-select">
                <h1>Pick Movie To Edit :</h1>
                    <select
                    id="movie_id"
                    name="movie_id"
                    value={movieId}
                    onChange={(e) => setMovieId(e.target.value)}
                    >
                        {movies?.map((movie) => (
                            <option key={movie.id} value={movie.id}>{movie.title}</option>
                        ))}
                    </select>
            </div>
            <div className='movie-post-form-container'>
                <h1>Movie Information Edit Field: </h1>
                <p>Important: When editing movie information all fields must be filled out!</p>
                <form onSubmit={handleSubmit} className='movie-form'>
                    <div className='input-movie'>
                        <input 
                            className='movie-input'
                            type="text"
                            placeholder='Movie Poster URL'
                            name='Movie Poster'
                            value={moviePoster}
                            onChange={(event) => setMoviePoster(event.target.value)}
                        />
                    </div> 
                    <div className='input-movie'>
                        <input 
                            className='movie-input'
                            type="text"
                            placeholder='Movie Gross Worldwide'
                            name='Gross Worldwide'
                            value={grossWorldwide}
                            onChange={(event) => setGrossWorldwide(event.target.value)}
                        />
                    </div>   
                    <div className='input-movie'> 
                        <button className='submit-button'>
                            Edit Movie Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MovieEditor;