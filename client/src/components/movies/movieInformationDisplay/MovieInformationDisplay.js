import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


function MovieInformationDisplay() {
    const [singleMovie, setSingleMovie] = useState([])
   // const [actors, setActors] = useState([])

    const {id} = useParams()

    
    
    useEffect(() => {
        fetch(`/movies/${id}`)
        .then((r) => r.json())
        .then((singleMovie) => setSingleMovie(singleMovie))
     }, [id])
    
     

    return(
        <div className="movie-info-display">
            <h1>This Title:</h1>
            <h2>{singleMovie.title}</h2>
            
        </div>
    )
}

export default MovieInformationDisplay