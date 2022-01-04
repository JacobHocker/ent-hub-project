import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieGenreDisplay.scss'

function MovieGenreDisplay({ genres }) {


    const genreShow = genres.map((genre) => (
        <div className='genre-movie-display-container' key={genre.id}>
             <div className='genre-movie-display-card'>
                 <img className='genre-movie-display-image' src={genre.genre_picture} alt={genre.name} />
                 <div className='genre-movie-display-info'>
                     <h2>{genre.name}</h2>
                 </div>
                 <div className='genre-movie-display-summary'>
                     <h2>Genre Description:{" "}</h2>
                     <p>{genre.description}</p>
                     <button className='movie-info-button'>
                        <NavLink to={`/genres/${genre.id}`}>
                             Learn More!
                        </NavLink>
                     </button>
                 </div>   
             </div>
         </div>
     ))
    return(
        <div className='genre-display'>
            {genreShow}
        </div>
    )
}

export default MovieGenreDisplay