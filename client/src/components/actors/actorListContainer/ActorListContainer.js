import React, { useState, useEffect } from "react";
import ActorList from "../actorList/ActorList";
import ActorSearchBar from "../searchBar/ActorSearchBar";
import './ActorListContainer.scss'


function ActorListContainer() {
    const [actors, setActors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) => { setActors(actors);
        });
    }, []);

    
    const actorsToDisplay = actors.filter((actor) => 
    actor.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
    return(
        <div className='actor-list-page'>
            <ActorSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="actor-list-container">
                <ActorList actors={actorsToDisplay} />
            </div>
        </div>
    )
};

export default ActorListContainer;