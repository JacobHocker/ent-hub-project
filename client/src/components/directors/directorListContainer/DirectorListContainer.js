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
  
    return(
        <div className='director-list-page'>
            <DirectorSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="director-list-container">
                <DirectorList directors={directorsToDisplay} />
            </div>
        </div>
    )
};

export default DirectorListContainer;