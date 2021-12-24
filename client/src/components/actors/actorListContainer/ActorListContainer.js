import React, { useState, useEffect } from "react";
import ActorList from "../actorList/ActorList";
import './ActorListContainer.scss'


function ActorListContainer() {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) => { setActors(actors);
        });
    }, []);

    

  
    const actorsToDisplay = actors.map((actor) =>  (
        <ActorList 
            key={actor.id}
            name={actor.name}
            actorImage={actor.actor_image}
            briefHistory={actor.brief_history}
            actor={actor}
        />

    ))

   
    return(
        <div className='actor-list-container'>
            {actorsToDisplay}
        </div>
    )
};

export default ActorListContainer;