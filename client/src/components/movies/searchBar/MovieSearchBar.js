import React from 'react'

function MovieSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar'>
            <h1>Search For A Movie! </h1>
            <input 
            className='movie-search-bar'
            type='text'
            placeholder='Search By Title'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>

    );
};

export default MovieSearchBar;