import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieActorDisplay.scss';
//import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function MovieActorDisplay({ actors  }) {
    
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
    
    
    

    const actorShow = actors.map((actor) => (
       <div className='actor-movie-display-container' key={actor.id}>
            <div className='actor-movie-display-card'>
                <img className='actor-movie-display-image' src={actor.actor_image} alt={actor.name} />
                <div className='actor-movie-display-info'>
                    <h2>{actor.name}</h2>
                </div>
                <div className='actor-movie-display-summary'>
                    <h2>Actor History:</h2>
                    <p>{actor.brief_history}</p>
                    <button className='movie-info-button'>
                        <NavLink to={`/actors/${actor.id}`}>
                            Learn More!
                        </NavLink>
                    </button>
                </div>   
            </div>
        </div>
    ))
    
    
    return(
        <div className='actor-display'>
            {actorShow}
        </div>
    )
}

export default MovieActorDisplay;