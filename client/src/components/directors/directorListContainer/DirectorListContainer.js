import React, { useState, useEffect } from "react";
import DirectorList from "../directorList/DirectorList";
import DirectorSearchBar from "../searchBar/DirectorSearchBar";
import './DirectorListContainer.scss'


function DirectorListContainer() {
    const [directors, setDirectors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(() => {
        fetch("/directors")
        .then((r) => r.json())
        .then((directors) => { setDirectors(directors);
        });
    }, []);

    
    const directorsToDisplay = directors.filter((director) => 
    director.name.toLowerCase().includes(searchTerm.toLowerCase()))

    function handleDeleteDirector(id) {
        const updatedDirectors = directors.filter((director) => director.id !== id);
        setDirectors(updatedDirectors);
    };

    const directorCards = directorsToDisplay.map((director) => (
        <DirectorList
            key={director.id}
            onDeleteDirector={handleDeleteDirector}
            director={director}
            directorImage={director.director_image}
            id={director.id}
            name={director.name}
            briefHistory={director.brief_history}
            />
    ))
  
    return(
        <div className='director-list-page'>
            <DirectorSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="director-list-container">
                {directorCards}
            </div>
        </div>
    )
};

export default DirectorListContainer;