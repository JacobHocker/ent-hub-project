import React, { useEffect, useState } from 'react';
import './EditorContainer.scss';
import ActorEditor from '../actorEditor/ActorEditor';
import DirectorEditor from '../directorEditor/DirectorEditor';
import MovieEditor from '../movieEditor/MovieEditor';


function EditorContainer() {
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) =>  setMovies(movies))
    }, [])

    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) =>  setActors(actors))
    }, [])

    useEffect(() => {
        fetch("/directors")
        .then((r) => r.json())
        .then((directors) =>  setDirectors(directors))
    }, [])

    function handleUpdateMovie(updatedMovie) {
        setMovies((movies) =>
            movies.map((movie) => {
            return movie.id === updatedMovie.id ? updatedMovie : movie;
            })
        );
    };

    function handleUpdateActor(updatedActor) {
        setActors((actors) =>
            actors.map((actor) => {
            return actor.id === updatedActor.id ? updatedActor : actor;
            })
        );
    };

    function handleUpdateDirector(updatedDirector) {
        setDirectors((directors) =>
            directors.map((director) => {
            return director.id === updatedDirector.id ? updatedDirector : director;
            })
        );
    };

    return(
        <div className='all-editor-container'>
            <h1>Editor Page!</h1>
            <p>Here you can edit certain attributes of our databases!</p>
            <MovieEditor movies={movies} onUpdateMovie={handleUpdateMovie} />
            <ActorEditor actors={actors} onUpdateActor={handleUpdateActor} />
            <DirectorEditor directors={directors} onUpdateDirector={handleUpdateDirector} />
        </div>
    )
}

export default EditorContainer