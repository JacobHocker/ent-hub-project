import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActorList.scss'


function ActorList({ name, actorImage, actor, briefHistory }) { 
    let actorId = actor.id 
    
    return(
        <div  className='actor-list-display-card'>
            <img src={actorImage} alt={name} className='actor-list-display-image' />
            <div className='actor-list-display-info'>
                <h4>{name}</h4>
            </div>
            <div className='actor-list-display-summary'>
                <h4>Actor History: </h4>
                <p>{briefHistory}</p>
                <button>
                    <NavLink to={`/actors/${actorId}`}>
                        Learn More! 
                    </NavLink>
                </button>
            </div>
           
        </div>
    )
}

export default ActorList;