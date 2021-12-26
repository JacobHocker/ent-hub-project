import React from 'react'

function DirectorSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar'>
            <h1>Search For An Director! </h1>
            <input 
            className='director-search-bar'
            type='text'
            placeholder='Search By Name'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>

    );
};

export default DirectorSearchBar;