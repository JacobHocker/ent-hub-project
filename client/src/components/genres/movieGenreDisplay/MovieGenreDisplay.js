import React from 'react';
import { Link } from 'react-router-dom';
import './MovieGenreDisplay.scss'
//import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function MovieGenreDisplay({ movies  }) {
    
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
    
    
    

    const movieShow = movies.map((movie) => (
       <div className='movie-genre-display-container' key={movie.id}>
            <div className='movie-genre-display-card'>
                <img className='movie-genre-display-image' src={movie.movie_poster} alt={movie.title} />
                <div className='movie-genre-display-info'>
                    <h2>{movie.title}</h2>
                </div>
                <div className='movie-genre-display-summary'>
                    <h2>Movie Summary: </h2>
                    <p>{movie.summary}</p>
                    <Link to={`/movies/${movie.id}`} >
                        <button>
                            Learn More!
                        </button>
                    </Link>
                </div>   
            </div>
        </div>
    ))
    
    
    return(
        <div className='movie-display'>
            {movieShow}
        </div>
    )
}

export default MovieGenreDisplay;