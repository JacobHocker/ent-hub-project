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
        <h2>About: </h2>
        <p>Enjoy searching through the large database of many different aspects of the entertainment industry.  If you have seen a film and want to leave your thoughts or critiques feel free to rate the movies and leave a review!</p>
      </div>
      <div className="random-database-description">
          <h2>Below are suggestions of some categories you may be interested in!</h2>
      </div>
      <div className="random-database-container">
        <div className="random-container">
          <h3>Movie: </h3>
          <div className="randomize-info">
            <h4>{randMovie.title}</h4>
            <img src={randMovie.movie_poster} alt={randMovie.title} className='randomize-image' />
            <Link to={`/movies/${randMovie.id}`}>
              <button className="home-page-button">Check It Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <h3>Actor:  </h3>
          <div className="randomize-info">
            <h4>{randActor.name}</h4>
            <img src={randActor.actor_image} alt={randMovie.name} className='randomize-image' />
            <Link to={`/actors/${randActor.id}`}>
              <button className="home-page-button">Check Them Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <h3>Director:  </h3>
          <div className="randomize-info">
            <h4>{randDirector.name}</h4>
            <img src={randDirector.director_image} alt={randDirector.name} className='randomize-image' />
            <Link to={`/directors/${randDirector.id}`}>
              <button className="home-page-button">Check Them Out!</button>
            </Link>
          </div>
        </div>
        <div className="random-container">
          <h3>Genre:  </h3>
          <div className="randomize-info">
            <h4>{randGenre.name}</h4>
            <img src={randGenre.genre_picture} alt={randGenre.name} className='randomize-image' />
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


