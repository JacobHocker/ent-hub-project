import React from 'react';
import { NavLink } from 'react-router-dom';
import './GenreList.scss'


function GenreList({ id, genrePicture, genre, name, description, onDeleteGenre }) { 
    function handleDeleteClick() {
        fetch(`/genres/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteGenre(genre)
            }
        });
    }

    
    return(
        <div className='cards-section'>
            <div  className='genre-list-display-card'>
                <img src={genrePicture} alt={name} className='director-list-display-image' />
                <div className='director-list-display-info'>
                    <h4>{name}</h4>
                </div>
                <div className='genre-list-display-summary'>
                    <h4>Genre Description: </h4>
                    <p>{description}</p>
                    <button className='genre-list-button'>
                        <NavLink to={`/genres/${id}`}>
                            Learn More! 
                        </NavLink>
                    </button>
                    <button className='genre-list-button' onClick={handleDeleteClick}>
                            Delete Genre
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GenreList;