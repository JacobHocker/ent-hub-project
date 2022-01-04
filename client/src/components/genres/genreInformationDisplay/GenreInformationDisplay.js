import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MovieGenreDisplay from '../movieGenreDisplay/MovieGenreDisplay';
import './GenreInformationDisplay.scss'



function GenreInformationDisplay() {
    const [singleGenre, setSingleGenre] = useState({})
    
   
    const {id} = useParams()

    useEffect(() => {   
        
     fetch(`/genres/${id}`)
        .then((r) => r.json())
        .then((singleGenre) => { setSingleGenre(singleGenre)
        })
    }, [id]);
    
    
    
    return(
        <div className="genre-info-display-page">
            <div className="genre-info-display-container">
                <h1>{singleGenre.name}</h1>
                <img src={singleGenre.genre_picture} className="genre-info-poster-display" alt={singleGenre.name} />
                <div className="genre-display-information-container">
                    <div className="genre-display">
                        <h2 className="genre-info-text">Genre Description: </h2>
                        <h4 className="genre-p">{singleGenre.description}</h4>
                    </div>
                </div>
            </div>
            <div className="genre-display-card-container">
                <h1 className="movie-info-text">Movies In This Genre: </h1>
                 {singleGenre?.movies && <MovieGenreDisplay movies={singleGenre.movies} />} 
            </div>
        </div>
    )
}

export default GenreInformationDisplay;