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

    function handleDeleteActor(id) {
        const updatedActors = actors.filter((actor) => actor.id !== id);
        setActors(updatedActors);
    };

    const actorCards = actorsToDisplay.map((actor) => (
        <ActorList
            key={actor.id}
            onDeleteActor={handleDeleteActor}
            actor={actor}
            actorImage={actor.actor_image}
            id={actor.id}
            name={actor.name}
            briefHistory={actor.brief_history}
            />
    ))
  
    return(
        <div className='actor-list-page'>
            <ActorSearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
            <div className="actor-list-container">
                {actorCards}
            </div>
        </div>
    )
};

export default ActorListContainer;