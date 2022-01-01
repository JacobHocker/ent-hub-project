import React, { useState, useEffect } from 'react';
import ActorMovieAssociate from '../movieActor/ActorMovieAssociate';
import DirectorMovieAssociate from '../movieDirector/DirectorMovieAssociate';
import GenreMovieAssociate from '../movieGenre/GenreMovieAssociate';
import './AssociatingContainer.scss'


function AssociatingContainer() {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [actors, setActors] = useState([])
    const [directors, setDirectors] = useState([])
    
    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) => { setMovies(movies);
        });
    }, []);

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) => { setActors(actors);
        });
    }, []);

    useEffect(() => {
        fetch("/directors")
        .then((r) => r.json())
        .then((directors) => { setDirectors(directors);
        });
    }, []);

    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then((genres) => { setGenres(genres);
        });
    }, []);

    return(
        <div className='associating-container'>
            <h1>Associations!</h1>
            <p>After submitting to the site make the association between the actor, movie, director, or genre that it belongs to!</p>
            <ActorMovieAssociate movies={movies} actors={actors} />
            <DirectorMovieAssociate movies={movies} directors={directors} />
            <GenreMovieAssociate movies={movies}  genres={genres} />
        </div>
    )
}

export default AssociatingContainer