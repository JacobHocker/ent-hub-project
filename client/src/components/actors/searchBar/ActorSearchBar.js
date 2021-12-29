import React from 'react';
import './ActorSearchBar.scss';
import { GoSearch } from 'react-icons/go';

function ActorSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar-container'>
            <div className='search-bar'>
                <GoSearch  className='search-icon'/>
                <input 
                className='actor-search-bar'
                type='text'
                placeholder='Search By Name...'
                value={searchTerm}
                onChange={handleChange}
                />
            </div>
        </div>

    );
};

export default ActorSearchBar;