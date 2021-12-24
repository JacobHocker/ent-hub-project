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
    <div className='home'>
      <main>
        <h2>Welcome to Entertainment Hub</h2>
        <h3>The one stop shop for all your entertainment database needs!</h3>
      </main>
    </div>
    )
}

export default Home;