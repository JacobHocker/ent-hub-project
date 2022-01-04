import React, { useEffect, useState } from "react";
import image from "../../assets/pictures/entertainment-hub-logo.png";
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  const [randMovie, setRandMovie] = useState({})
  const [randActor, setRandActor] = useState({})
  const [randDirector, setRandDirector] = useState({})
  const [randGenre, setRandGenre] = useState({})

  useEffect(() => {
    fetch("/random_movie")
    .then((r) => r.json())
    .then((randMovie) => { setRandMovie(randMovie);
    });
}, []);

  useEffect(() => {
    fetch("/random_actor")
    .then((r) => r.json())
    .then((randActor) => { setRandActor(randActor);
    });
}, []);

useEffect(() => {
  fetch("/random_director")
  .then((r) => r.json())
  .then((randDirector) => { setRandDirector(randDirector);
  });
}, []);

useEffect(() => {
  fetch("/random_genre")
  .then((r) => r.json())
  .then((randGenre) => { setRandGenre(randGenre);
  });
}, []);

     

    return(
    <div className='home-container'>
      <main className="welcome-area">
        <h1>Welcome to</h1>
        <img src={image} alt='ent-hub-log' className='home-page-logo' />
      </main>
      <div className="about-site-container">
        <h1>About: </h1>
        <p>Enjoy searching through the large database of many different aspects of the entertainment industry.  If you have seen a film and want to leave your thoughts or critiques feel free to rate the movies and leave a review!</p>
      </div>
      <div className="random-database-description">
          <h1>Suggestions To Check Out: </h1>
          <p>Below are suggestions of some categories you may be interested in!</p>
      </div>
      <div className="random-database-container">
        <div className="random-container">
          <div  className="random-header">
            <h3>{randMovie.title}</h3>
          </div>
          <div className="randomize-info">
            <img src={randMovie.movie_poster} alt={randMovie.title} className='randomize-image' />
          </div>
          <div className="random-footer">
            <Link to={`/movies/${randMovie.id}`}>
              <button className="home-page-button">Check It Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <div  className="random-header">
            <h3>{randActor.name}</h3>
          </div>
          <div className="randomize-info">
            <img src={randActor.actor_image} alt={randMovie.name} className='randomize-image' />
          </div>
          <div className="random-footer">
            <Link to={`/actors/${randActor.id}`}>
              <button className="home-page-button">Check Them Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <div  className="random-header">
            <h3>{randDirector.name}</h3>
          </div>
          <div className="randomize-info">
            <img src={randDirector.director_image} alt={randDirector.name} className='randomize-image' />
          </div>
          <div className="random-footer">
            <Link to={`/directors/${randDirector.id}`}>
              <button className="home-page-button">Check Them Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <div  className="random-header">
            <h3>{randGenre.name}</h3>
          </div>
          <div className="randomize-info">
            <img src={randGenre.genre_picture} alt={randGenre.name} className='randomize-image' />
          </div>
          <div className="random-footer">
            <Link to={`/genres/${randGenre.id}`}>
              <button className="home-page-button">Check It Out!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home;


