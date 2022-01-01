import React from 'react';
import { Link } from 'react-router-dom';
import './MovieGenreDisplay.scss'

function MovieGenreDisplay({ genres }) {

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

    const genreShow = genres.map((genre) => (
        <div className='genre-movie-display-container' key={genre.id}>
             <div className='genre-movie-display-card'>
                 <img className='genre-movie-display-image' src={genre.genre_image} alt={genre.name} />
                 <div className='genre-movie-display-info'>
                     <h2>{genre.name}</h2>
                 </div>
                 <div className='genre-movie-display-summary'>
                     <h2>Genre Description:{" "}</h2>
                     <p>{genre.description}</p>
                     <Link to={`/genres/${genre.id}`}>
                         <button>
                             Learn More!
                         </button>
                     </Link>
                 </div>   
             </div>
         </div>
     ))
    return(
        <div className='genre-display'>
            {genreShow}
        </div>
    )
}

export default MovieGenreDisplay