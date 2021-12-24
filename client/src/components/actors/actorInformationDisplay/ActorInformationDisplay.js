import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ActorMovieDisplay from "../actorMovieDisplay/ActorMovieDisplay";
import './ActorInformationDisplay.scss'



function ActorInformationDisplay() {
    const [singleActor, setSingleActor] = useState({})
    
   
    const {id} = useParams()

    useEffect(() => {   
        
     fetch(`/actors/${id}`)
        .then((r) => r.json())
        .then((singleActor) => { setSingleActor(singleActor)
        })
    }, [id]);
    
    
    
    return(
        <div className="actor-info-display-page">
            <div className="actor-info-display-container">
                <h1>{singleActor.name}</h1>
                <img src={singleActor.actor_image} className="actor-info-poster-display" alt={singleActor.name} />
                <iframe
                    className="actor-trailer-display"
                    src={singleActor.actor_video}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title='Actor Trailer'
                />
                <div className="actor-display-information-container">
                    <div className="actor-display">
                        <h2 className="actor-info-text">Actor History: </h2>
                        <h4 className="actor-p">{singleActor.brief_history}</h4>
                    </div>
                    <>
                    <div className="actor-display">
                        <h2 className="actor-info-text">Birth Date: </h2>
                        <h4 className="actor-p">{singleActor.birth_date}</h4>
                    </div>
                    </>
                    <>
                    <div className="actor-display">
                        <h2 className="actor-info-text">Notable Accomplishments: </h2>
                        <h4 className="actor-p">{singleActor.accomplishments}</h4>
                    </div>
                    </>
                    <>
                    <div className="actor-display">
                        <h2 className="actor-info-text">Net Worth: </h2>
                        <h4 className="actor-p">{singleActor.net_worth}</h4>
                    </div>
                    </>
                </div>
            </div>
            <div className="actor-display-card-container">
                <h1 className="movie-info-text">Movies Appeared In: </h1>
                {singleActor?.movies && <ActorMovieDisplay movies={singleActor.movies} />}
            </div>
        </div>
    )
}

export default ActorInformationDisplay