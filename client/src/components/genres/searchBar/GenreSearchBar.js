import React from 'react'
import './GenreSearchBar.scss'

function GenreSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar'>
            <h1>Search For An Genre! </h1>
            <input 
            className='genre-search-bar'
            type='text'
            placeholder='Search By Name'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>

    );
};

export default GenreSearchBar;