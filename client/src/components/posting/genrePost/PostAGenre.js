import React, { useState } from 'react';
import './PostAGenre.scss'

function PostAGenre({ onAddGenre }) {
    const [genreImage, setGenreImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    

    

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/directors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                genre_image: genreImage,
                name: name,
                description: description,
               
            }),
        })
        .then((r) => r.json())
        .then((newGenre) => onAddGenre(newGenre))
    }

    return(
        <div className='genre-post-form-container'>
            <form onSubmit={handleSubmit} className='genre-form'>
                <div className='input-genre'>
                    <input 
                        className='genre-input'
                        type="text"
                        placeholder='Genre Image URL'
                        name='Genre Image'
                        value={genreImage}
                        onChange={(event) => setGenreImage(event.target.value)}
                    />
                </div>
                <div className='input-genre'>
                    <input 
                        className='genre-input'
                        type="text"
                        placeholder='Genre Name'
                        name='Genre Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='input-genre'>
                    <textarea 
                        className='genre-input'
                        type="text"
                        rows={5}
                        placeholder='Description Of Genre'
                        name='Description'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>  
                <div className='input-director'> 
                    <button className='submit-button'>
                        Submit Genre!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostAGenre;