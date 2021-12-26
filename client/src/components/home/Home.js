import React, { useEffect, useState } from "react";
//import { Link } from 'react-router-dom';

function Home() {
  const [randActor, setRandActor] = useState([])

  useEffect(() => {
    fetch("/random_actor")
    .then((r) => r.json())
    .then((randActor) => { setRandActor(randActor);
    });
}, []);

    console.log(randActor)

    return(
    <div className='home-container'>
      <main className="welcome-area">
        <h1>Welcome to Entertainment Hub</h1>
        <h3>The one stop shop for all your entertainment database needs!</h3>
      </main>
      <div className="about-site-container">
        <h1>This is where the about the site or about us description will be</h1>
      </div>
      <div className="random-database-container">
        <div className="random-database-description">
          <h1>This area will give a basic over view and suggestion for random movies and actors genres and directors</h1>
        </div>
        <div className="random-movie-container">
          <h1>Random Movie: </h1>
        </div>
        <div className="random-actor-container">
          <h1>Random Actor: </h1>
        </div>
        <div className="random-director-container">
          <h1>Random Director: </h1>
        </div>
        <div className="random-genre-container">
          <h1>Random Genre: </h1>
        </div>
      </div>
    </div>
    )
}

export default Home;