import React from 'react'

function ActorSearchBar({ searchTerm, onChangeSearch }) {

    function handleChange(event) {
        onChangeSearch(event.target.value)
    }

    return(
        <div className='search-bar'>
            <h1>Search For An Actor! </h1>
            <input 
            className='actor-search-bar'
            type='text'
            placeholder='Search By Name'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>

    );
};

export default ActorSearchBar;