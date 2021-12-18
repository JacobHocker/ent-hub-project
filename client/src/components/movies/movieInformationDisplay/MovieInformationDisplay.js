import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './MovieInformationDisplay.scss'
import MovieActorDisplay from "../movieActorDisplay/MovieActorDisplay";


function MovieInformationDisplay() {
    const [singleMovie, setSingleMovie] = useState([])
   
    const {id} = useParams()

    useEffect(() => {
        fetch(`/movies/${id}`)
        .then((r) => r.json())
        .then((singleMovie) => setSingleMovie(singleMovie))
    }, [id])
    
        
    
    return(
        <div className="movie-info-display-page">
            <div className="movie-info-display-container">
                <h1>{singleMovie.title}</h1>
                <img src={singleMovie.movie_poster} className="movie-info-poster-display" alt={singleMovie.title} />
                <iframe
                    className="movie-trailer-display"
                    src={singleMovie.movie_trailer}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title='Movie Trailer'
                />
                <div className="movie-display-information-container">
                    <div className="movie-display-summary">
                        <h2>Movie Summary: </h2>
                        <p>{singleMovie.summary}</p>
                    </div>
                    <>
                    <div className="movie-display-awards">
                        <h2>Notable Awards: </h2>
                        <p>{singleMovie.awards}</p>
                    </div>
                    </>
                    <>
                    <div className="movie-display-release-date">
                        <h2>Release Date: </h2>
                        <p>{singleMovie.release_date}</p>
                    </div>
                    </>
                </div>
            </div>
            <div className="actor-display-card-container">
                <h1>Cast List:</h1>
                <MovieActorDisplay movieId={singleMovie.id} />
            </div>
        </div>
    )
}

export default MovieInformationDisplay