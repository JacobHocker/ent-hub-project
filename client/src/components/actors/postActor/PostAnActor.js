import React, { useState, useEffect } from 'react';
import './PostAnActor.scss'

function PostAnActor() {
    const [actors, setActors] = useState([])
    const [actorImage, setActorImage] = useState("");
    const [actorVideo, setActorVideo] = useState("");
    const [name, setName] = useState("");
    const [briefHistory, setBriefHistory] = useState("");
    const [accomplishments, setAccomplishments] = useState("");
    const [birthDate, setBirthDate] = useState("");
    

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) =>  setActors(actors))
    }, [])
    
    function handleAddActor(newActor) {
        const updatedActors = [...actors, newActor]
        setActors(updatedActors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/actors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                actor_image: actorImage,
                actor_video: actorVideo,
                name: name,
                brief_history: briefHistory,
                accomplishments: accomplishments,
                birth_date: birthDate,
            }),
        })
        .then((r) => r.json())
        .then((newActor) => handleAddActor(newActor))
    }

    return(
        <div className='actor-post-form-container'>
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
                        placeholder='Actor Video URL'
                        name='Actor Video'
                        value={actorVideo}
                        onChange={(event) => setActorVideo(event.target.value)}
                    />
                </div>
                <div className='input-actor'>
                    <input 
                        className='actor-input'
                        type="text"
                        placeholder='Actor Name'
                        name='Actor Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='input-actor'>
                    <textarea 
                        className='actor-input'
                        type="text"
                        placeholder='A Brief History About Actor'
                        name='Brief History'
                        value={briefHistory}
                        onChange={(event) => setBriefHistory(event.target.value)}
                    />
                </div>
                <div className='input-actor'>
                    <textarea 
                        className='actor-input'
                        type="text"
                        placeholder='Actor Accomplishments'
                        name='Accomplishments'
                        value={accomplishments}
                        onChange={(event) => setAccomplishments(event.target.value)}
                    />
                </div>
                <div className='input-actor'>
                    <input 
                        className='actor-input'
                        type="text"
                        placeholder='Actor Birth Date'
                        name='Birth Date'
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                    />
                </div>    
                <div className='input-actor'> 
                    <button className='submit-button'>
                        Submit Actor!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostAnActor