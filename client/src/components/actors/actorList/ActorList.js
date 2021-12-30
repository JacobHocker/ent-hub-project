import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActorList.scss'


function ActorList({ actor, id, name, briefHistory, actorImage, onDeleteActor }) { 
   
    function handleDeleteClick() {
        fetch(`/actors/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteActor(actor)
            }
        });
    }
    
    
    return(
        <div className='cards-section'>
            <div  className='actor-list-display-card'>
                <img src={actorImage} alt={name} className='actor-list-display-image' />
                <div className='actor-list-display-info'>
                    <h4>{name}</h4>
                </div>
                <div className='actor-list-display-summary'>
                    <h4>Actor History: </h4>
                    <p>{briefHistory}</p>
                    <button>
                        <NavLink to={`/actors/${id}`}>
                            Learn More! 
                        </NavLink>
                    </button>
                    <button onClick={handleDeleteClick}>
                        Delete Actor
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ActorList;