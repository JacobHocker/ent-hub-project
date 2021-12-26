import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import DirectorMovieDisplay from "../directorMovieDisplay/DirectorMovieDisplay";
import './DirectorInformationDisplay.scss'



function DirectorInformationDisplay() {
    const [singleDirector, setSingleDirector] = useState({})
    
   
    const {id} = useParams()

    useEffect(() => {   
        
     fetch(`/directors/${id}`)
        .then((r) => r.json())
        .then((singleDirector) => { setSingleDirector(singleDirector)
        })
    }, [id]);
    
    
    
    return(
        <div className="director-info-display-page">
            <div className="director-info-display-container">
                <h1>{singleDirector.name}</h1>
                <img src={singleDirector.director_image} className="director-info-poster-display" alt={singleDirector.name} />
                <div className="director-display-information-container">
                    <div className="director-display">
                        <h2 className="director-info-text">Director History: </h2>
                        <h4 className="director-p">{singleDirector.brief_history}</h4>
                    </div>
                    <>
                    <div className="director-display">
                        <h2 className="director-info-text">Birth Date: </h2>
                        <h4 className="director-p">{singleDirector.birth_date}</h4>
                    </div>
                    </>
                    <>
                    <div className="director-display">
                        <h2 className="director-info-text">Notable Accomplishments: </h2>
                        <h4 className="director-p">{singleDirector.accomplishments}</h4>
                    </div>
                    </>
                    <>
                    <div className="director-display">
                        <h2 className="director-info-text">Net Worth: </h2>
                        <h4 className="director-p">{singleDirector.net_worth}</h4>
                    </div>
                    </>
                </div>
            </div>
            <div className="director-display-card-container">
                <h1 className="movie-info-text">Movies Directed: </h1>
                 {singleDirector?.movies && <DirectorMovieDisplay movies={singleDirector.movies} />} 
            </div>
        </div>
    )
}

export default DirectorInformationDisplay