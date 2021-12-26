import React, { useState, useEffect } from "react";
import GenreList from '../genreList/GenreList';
import GenreSearchBar from "../searchBar/GenreSearchBar";


function GenreListContainer() {
    const [genres, setGenres] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then((genres) => { setGenres(genres);
        });
    }, []);

    
    const genresToDisplay = genres.filter((genre) => 
    genre.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
    return(
        <div className='genres-list-page'>
            <GenreSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="genres-list-container">
                <GenreList genres={genresToDisplay} />
            </div>
        </div>
    )
};

export default GenreListContainer;