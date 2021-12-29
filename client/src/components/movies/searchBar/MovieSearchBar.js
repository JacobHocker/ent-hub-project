import React from 'react';
import './MovieSearchBar.scss';
import { GoSearch } from 'react-icons/go';

function MovieSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar-container'>
            <div className='search-bar'>
                <GoSearch  className='search-icon'/>
                <input 
                className='movie-search-bar'
                type='text'
                placeholder='Search By Title...'
                value={searchTerm}
                onChange={handleChange}
                />
            </div>
        </div>

    );
};

export default MovieSearchBar;