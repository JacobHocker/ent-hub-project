import React from "react";
import { NavLink } from 'react-router-dom';
import './MovieDirectorDisplay.scss'

function MovieDirectorDisplay({ directors }) {

    const directorShow = directors.map((director) => (
        <div className='director-movie-display-container' key={director.id}>
             <div className='director-movie-display-card'>
                 <img className='director-movie-display-image' src={director.director_image} alt={director.name} />
                 <div className='director-movie-display-info'>
                     <h2>{director.name}</h2>
                 </div>
                 <div className='director-movie-display-summary'>
                     <h2>Director History:</h2>
                     <p>{director.brief_history}</p>
                     <button className='movie-info-button'>
                     <NavLink to={`/directors/${director.id}`}> 
                             Learn More!
                     </NavLink>
                     </button>
                 </div>   
             </div>
         </div>
     ))


    return(
        <div className="director-display">
            {directorShow}
        </div>
    )
}

export default MovieDirectorDisplay;