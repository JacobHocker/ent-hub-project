import React, { useState } from 'react';
import './DirectorEditor.scss'

function DirectorEditor({ directors, onUpdateDirector }) {
    const [directorId, setDirectorId] = useState("")
    const [directorImage, setDirectorImage] = useState("");
    const [netWorth, setNetWorth] = useState("");
       

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/directors/${directorId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                director_image: directorImage,
                net_worth: netWorth,
            }),
        })
        .then((r) => r.json())
        .then((updatedDirector) => onUpdateDirector(updatedDirector));
    };
    
    

    return(
        <div className='editor-container'>
        <div className="director-select">
                <h1>Pick Director To Edit :</h1>
                    <select
                    id="director_id"
                    name="director_id"
                    value={directorId}
                    onChange={(e) => setDirectorId(e.target.value)}
                    >
                        {directors?.map((director) => (
                            <option key={director.id} value={director.id}>{director.name}</option>
                        ))}
                    </select>
            </div>
            <div className='director-post-form-container'>
                <h1>Director Information Edit Field: </h1>
                <p>Important: When editing director information all fields must be filled out!</p>
                <form onSubmit={handleSubmit} className='director-form'>
                    <div className='input-director'>
                        <input 
                            className='director-input'
                            type="text"
                            placeholder='Director Image URL'
                            name='Director Image'
                            value={directorImage}
                            onChange={(event) => setDirectorImage(event.target.value)}
                        />
                    </div> 
                    <div className='input-director'>
                        <input 
                            className='director-input'
                            type="text"
                            placeholder='Director Net Worth'
                            name='Net Worth'
                            value={netWorth}
                            onChange={(event) => setNetWorth(event.target.value)}
                        />
                    </div>   
                    <div className='input-director'> 
                        <button className='submit-button'>
                            Edit Director Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DirectorEditor