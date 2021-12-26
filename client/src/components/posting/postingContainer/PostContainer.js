import React, { useEffect, useState } from 'react';
import PostAMovie from '../moviePost/PostAMovie';
import PostAnActor from '../actorPost/PostAnActor';
import PostADirector from '../directorPost/PostADirector';
import PostAGenre from '../genrePost/PostAGenre';

function PostContainer() {
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [genres, setGenres] = useState([]);

    //Post Movies
    useEffect(() => {
        fetch("/movies")
        .then((r) => r.json())
        .then((movies) =>  setMovies(movies))
    }, [])
    
    function handleAddMovie(newMovie) {
        const updatedMovies = [...movies, newMovie]
        setMovies(updatedMovies)
    }

    //Post Actors
    useEffect(() => {
        fetch("/actors")
        .then((r) => r.json())
        .then((actors) =>  setActors(actors))
    }, [])
    
    function handleAddActor(newActor) {
        const updatedActors = [...actors, newActor]
        setActors(updatedActors)
    }

    //Post Directors
    useEffect(() => {
        fetch("/directors")
        .then((r) => r.json())
        .then((directors) =>  setDirectors(directors))
    }, [])

    function handleAddDirector(newDirector) {
        const updatedDirectors = [...directors, newDirector]
        setDirectors(updatedDirectors)
    }

    //Post Genres
    useEffect(() => {
        fetch("/genres")
        .then((r) => r.json())
        .then((genres) =>  setGenres(genres))
    }, [])

    function handleAddGenre(newGenre) {
        const updatedGenres = [...genres, newGenre]
        setGenres(updatedGenres)
    }

    return(
        <div className='posting-container'>
            <div className='movie-post'>
                <h1>Post A Movie</h1>
               <PostAMovie movies={movies} onAddMovie={handleAddMovie} /> 
            </div>
            <div className='actor-post'>
                <h1>Post A Actor</h1>
                <PostAnActor actors={actors} onAddActor={handleAddActor} />
            </div>
            <div className='director-post'>
                <h1>Post A Director</h1>
                <PostADirector directors={directors} onAddDirector={handleAddDirector} />
            </div>
            <div className='genre-post'>
                <h1>Post A Genre</h1>
                <PostAGenre genres={genres} onAddGenre={handleAddGenre} />
            </div>
        </div>
    )
}

export default PostContainer;