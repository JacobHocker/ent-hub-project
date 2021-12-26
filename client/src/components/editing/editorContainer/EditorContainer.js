import React, { useEffect, useState } from 'react';
import ActorEditor from '../actorEditor/ActorEditor';


function EditorContainer() {
    const [actors, setActors] = useState([])

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) =>  setActors(actors))
    }, [])

    function handleUpdateActor(updatedActor) {
        setActors((actors) =>
            actors.map((actor) => {
            return actor.id === updatedActor.id ? updatedActor : actor;
            })
        );
    };

    return(
        <div className='editor-container'>
            <ActorEditor actors={actors} onUpdateActor={handleUpdateActor} />
        </div>
    )
}

export default EditorContainer