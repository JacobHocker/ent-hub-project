import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActorList.scss'


function ActorList({ actors }) { 
    
    const actorCardDisplay = actors.map((actor) => (
        <div  className='actor-list-display-card'>
            <img src={actor.actor_image} alt={actor.name} className='actor-list-display-image' />
            <div className='actor-list-display-info'>
                <h4>{actor.name}</h4>
            </div>
            <div className='actor-list-display-summary'>
                <h4>Actor History: </h4>
                <p>{actor.brief_history}</p>
                <button>
                    <NavLink to={`/actors/${actor.id}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
        </div>
    ))
    
    return(
        <div className='cards-section'>
            {actorCardDisplay}
        </div>
    )
}

export default ActorList;