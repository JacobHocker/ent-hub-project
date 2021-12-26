import React, { useState } from 'react';
import './ActorEditor.scss'

function ActorEditor({ actors, onUpdateActor }) {
    const [actorId, setActorId] = useState("")
    const [actorImage, setActorImage] = useState("");
    const [netWorth, setNetWorth] = useState("");
       

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/actors/${actorId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                actor_image: actorImage,
                net_worth: netWorth,
            }),
        })
        .then((r) => r.json())
        .then((updatedActor) => onUpdateActor(updatedActor));
    };
    
    

    return(
        <div className='editor-container'>
        <div className="actor-select">
                <h1>Pick Actor To Edit :</h1>
                    <select
                    id="actor_id"
                    name="actor_id"
                    value={actorId}
                    onChange={(e) => setActorId(e.target.value)}
                    >
                        {actors?.map((actor) => (
                            <option key={actor.id} value={actor.id}>{actor.name}</option>
                        ))}
                    </select>
            </div>
            <div className='actor-post-form-container'>
                <h1>Actor Information Edit Field: </h1>
                <p>Important: When editing actor information all fields must be filled out!</p>
                <form onSubmit={handleSubmit} className='actor-form'>
                    <div className='input-actor'>
                        <input 
                            className='actor-input'
                            type="text"
                            placeholder='Actor Image URL'
                            name='Actor Image'
                            value={actorImage}
                            onChange={(event) => setActorImage(event.target.value)}
                        />
                    </div> 
                    <div className='input-actor'>
                        <input 
                            className='actor-input'
                            type="text"
                            placeholder='Actor Net Worth'
                            name='Net Worth'
                            value={netWorth}
                            onChange={(event) => setNetWorth(event.target.value)}
                        />
                    </div>   
                    <div className='input-actor'> 
                        <button className='submit-button'>
                            Edit Actor Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ActorEditor