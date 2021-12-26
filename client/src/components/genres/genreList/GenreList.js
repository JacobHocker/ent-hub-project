import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenreList.scss'


function GenreList({ genres }) { 
    
    const genreCardDisplay = genres.map((genre) => (
        <div  className='genre-list-display-card'>
            <img src={genre.genre_image} alt={genre.name} className='director-list-display-image' />
            <div className='director-list-display-info'>
                <h4>{genre.name}</h4>
            </div>
            <div className='genre-list-display-summary'>
                <h4>Genre Description: </h4>
                <p>{genre.description}</p>
                <button>
                    <NavLink to={`/genres/${genre.id}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
        </div>
    ))
    
    return(
        <div className='cards-section'>
            {genreCardDisplay}
        </div>
    )
}

export default GenreList;