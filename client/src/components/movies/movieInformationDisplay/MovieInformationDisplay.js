import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './MovieInformationDisplay.scss'
import MovieActorDisplay from "../movieActorDisplay/MovieActorDisplay";
import MovieReviewListContainer from "../../movieReviews/movieReviewListContainer/MovieReviewListContainer";
import MovieDirectorDisplay from "../movieDirectorDisplay/MovieDirectorDisplay";
import MovieGenreDisplay from "../movieGenreDisplay/MovieGenreDisplay";



function MovieInformationDisplay() {
    const [singleMovie, setSingleMovie] = useState({})
    
   
    const {id} = useParams()

    useEffect(() => {     
     fetch(`/movies/${id}`)
        .then((r) => r.json())
        .then((singleMovie) => { setSingleMovie(singleMovie)
        })
    }, [id]);
    
    
    
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
                    <div className="movie-display">
                        <h2 className="movie-info-text">Movie Summary: </h2>
                        <h4 className="movie-p">{singleMovie.summary}</h4>
                    </div>
                    <>
                    <div className="movie-display">
                        <h2 className="movie-info-text">Release Date: </h2>
                        <h4 className="movie-p">{singleMovie.release_date}</h4>
                    </div>
                    </>
                    <>
                    <div className="movie-display">
                        <h2 className="movie-info-text">Run Time: </h2>
                        <h4 className="movie-p">{singleMovie.run_time} Minutes</h4>
                    </div>
                    </>
                    <>
                    <div className="movie-display">
                        <h2 className="movie-info-text">Notable Awards: </h2>
                        <h4 className="movie-p">{singleMovie.awards}</h4>
                    </div>
                    </>
                    <>
                    <div className="movie-display">
                        <h2 className="movie-info-text">Gross Worldwide: </h2>
                        <h4 className="movie-p">{singleMovie.gross_worldwide}</h4>
                    </div>
                    </>
                </div>
            </div>
            <div className="actor-display-card-container">
                <h1 className="movie-info-text">Cast List:{" "}</h1>
                {singleMovie?.actors && <MovieActorDisplay actors={singleMovie.actors} />}
            </div>
            <div className="actor-display-card-container">
                <h1 className="movie-info-text">Director:{" "}</h1>
                {singleMovie?.directors && <MovieDirectorDisplay directors={singleMovie.directors} />}
            </div>
            <div className="actor-display-card-container">
                <h1 className="movie-info-text">Genres:{" "}</h1>
                {singleMovie?.genres && <MovieGenreDisplay genres={singleMovie.genres} />}
            </div>
            <div className="movie-review-page-container">
                <h1>Reviews: </h1>
                {singleMovie?.movie_reviews && <MovieReviewListContainer movieId={singleMovie.id} 
                reviews={singleMovie.movie_reviews} />}
            </div>
        </div>
    )
}

export default MovieInformationDisplay