import React from 'react';
import { NavLink } from 'react-router-dom';
import './DirectorList.scss'


function DirectorList({ directors }) { 
    
    const directorCardDisplay = directors.map((director) => (
        <div  className='director-list-display-card'>
            <img src={director.director_image} alt={director.name} className='director-list-display-image' />
            <div className='director-list-display-info'>
                <h4>{director.name}</h4>
            </div>
            <div className='director-list-display-summary'>
                <h4>Director History: </h4>
                <p>{director.brief_history}</p>
                <button>
                    <NavLink to={`/directors/${director.id}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
        </div>
    ))
    
    return(
        <div className='cards-section'>
            {directorCardDisplay}
        </div>
    )
}

export default DirectorList;