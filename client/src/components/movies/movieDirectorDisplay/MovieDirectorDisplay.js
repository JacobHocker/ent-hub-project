import React from "react";
import { Link } from 'react-router-dom';
import './MovieDirectorDisplay.scss'

function MovieDirectorDisplay({ directors }) {

    // // // const [current, setCurrent] = useState(0)
    // // // const length = actors.length;
    
    
    
    // const nextActors = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    // }

    // const prevActors = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };

   
    
    // if (!Array.isArray(actors) || actors.length <= 0) {
    //     return null;
    // }

    // const actorShow = actors.map((actor, index) =>
    // (   <div className={index === current ? 'actor active' : 'actor'} key={index}>
    //     {index === current && (
    //         <div className='actor-movie-display-card'>
    //             <img className='actor-movie-display-image' src={actor.actor_image} alt={actor.name} />
    //             <div className='actor-movie-display-info'>
    //                 <h2>{actor.name}</h2>
    //             </div>
    //             <div className='actor-movie-display-summary'>
    //                 <h2>Actor History:</h2>
    //                 <p>{actor.brief_history}</p>
    //                 <button>
    //                     Learn More!
    //                 </button>
    //             </div>   
    //         </div>
    //     )}

    const directorShow = directors.map((director) => (
        <div className='director-movie-display-container' key={director.id}>
             <div className='director-movie-display-card'>
                 <img className='director-movie-display-image' src={director.director_image} alt={director.name} />
                 <div className='director-movie-display-info'>
                     <h2>{director.name}</h2>
                 </div>
                 <div className='director-movie-display-summary'>
                     <h2>Director History:</h2>
                     <p>{director.brief_history}</p>
                     <Link to={`/directors/${director.id}`}>
                         <button>
                             Learn More!
                         </button>
                     </Link>
                 </div>   
             </div>
         </div>
     ))


    return(
        <div className="director-display">
            {directorShow}
        </div>
    )
}

export default MovieDirectorDisplay;