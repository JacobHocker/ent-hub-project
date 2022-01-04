import React from 'react';
import { NavLink } from 'react-router-dom';
import './DirectorList.scss'


function DirectorList({ director, id, name, briefHistory, directorImage, onDeleteDirector }) { 
    
    function handleDeleteClick() {
        fetch(`/directors/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteDirector(director)
            }
        });
    }
    
    return(
        <div className='cards-section'>
            <div  className='director-list-display-card'>
                <img src={directorImage} alt={name} className='director-list-display-image' />
                <div className='director-list-display-info'>
                    <h4>{name}</h4>
                </div>
                <div className='director-list-display-summary'>
                    <h4>Director History: </h4>
                    <p>{briefHistory}</p>
                    <div className='button-container'>
                        <button className='director-list-button'>
                            <NavLink to={`/directors/${id}`}>
                                Learn More! 
                            </NavLink>
                        </button>
                        <button className='director-list-button' onClick={handleDeleteClick}>
                            Delete Director
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectorList;