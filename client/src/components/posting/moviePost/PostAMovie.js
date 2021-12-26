import React, { useState } from 'react';
import './PostAMovie.scss';

function PostAMovie({ onAddMovie }) {
    const [moviePoster, setMoviePoster] = useState("");
    const [movieTrailer, setMovieTrailer] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [awards, setAwards] = useState("");
    const [runTime, setRunTime] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [grossWorldwide, setGrossWorldwide] = useState("");

    

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                movie_poster: moviePoster,
                movie_trailer: movieTrailer,
                title: title,
                summary: summary,
                awards: awards,
                run_time: runTime,
                release_date: releaseDate,
                gross_worldwide: grossWorldwide,
            }),
        })
        .then((r) => r.json())
        .then((newMovie) => onAddMovie(newMovie))
    }

    return(
        <div className='movie-post-form-container'>
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
                        placeholder='Movie Trailer URL'
                        name='Movie Trailer'
                        value={movieTrailer}
                        onChange={(event) => setMovieTrailer(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <input 
                        className='movie-input'
                        type="text"
                        placeholder='Movie Title'
                        name='Movie Title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <textarea 
                        className='movie-input'
                        type="text"
                        placeholder='Movie Summary'
                        name='Movie Summary'
                        value={summary}
                        onChange={(event) => setSummary(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <textarea 
                        className='movie-input'
                        type="text"
                        placeholder='Movie Awards'
                        name='Movie Awards'
                        value={awards}
                        onChange={(event) => setAwards(event.target.value)}
                    />
                </div>  
                <div className='input-movie'>  
                    <input 
                        className='movie-input'
                        type="number"
                        placeholder='Movie Run Time'
                        name='Movie Run Time'
                        value={runTime}
                        onChange={(event) => setRunTime(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <input 
                        className='movie-input'
                        type="text"
                        placeholder='Movie Release Date'
                        name='Movie Release Date'
                        value={releaseDate}
                        onChange={(event) => setReleaseDate(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <input 
                        className='movie-input'
                        type="text"
                        placeholder='Movie Gross Worldwide'
                        name='Movie Gross Worldwide'
                        value={grossWorldwide}
                        onChange={(event) => setGrossWorldwide(event.target.value)}
                    />
                </div>
                <div className='input-movie'>
                    <button className='submit-button'>
                        Submit Movie!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostAMovie