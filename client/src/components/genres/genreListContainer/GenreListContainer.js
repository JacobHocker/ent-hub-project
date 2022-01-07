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
  
    function handleDeleteGenre(id) {
        const updatedGenres = genres.filter((genre) => genre.id !== id)
        setGenres(updatedGenres);
    }

    const genreCards = genresToDisplay.map((genre) => (
        <GenreList
        key={genre.id}
        id={genre.id}
        onDeleteGenre={handleDeleteGenre}
        genrePicture={genre.genre_picture}
        name={genre.name}
        description={genre.description}
        genre={genre}
        />
    ))


    return(
        <div className='genres-list-page'>
            <GenreSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="genres-list-container">
                {genreCards}
            </div>
        </div>
    )
};

export default GenreListContainer;