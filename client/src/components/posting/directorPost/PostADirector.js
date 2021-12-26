import React, { useState } from 'react';
import './PostADirector.scss'

function PostADirector({ onAddDirector }) {
    const [directorImage, setDirectorImage] = useState("");
    const [name, setName] = useState("");
    const [briefHistory, setBriefHistory] = useState("");
    const [accomplishments, setAccomplishments] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [netWorth, setNetWorth] = useState("");
    

   
    
    

    function handleSubmit(event) {
        event.preventDefault()
        fetch("/directors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                director_image: directorImage,
                name: name,
                brief_history: briefHistory,
                accomplishments: accomplishments,
                birth_date: birthDate,
                net_worth: netWorth,
            }),
        })
        .then((r) => r.json())
        .then((newDirector) => onAddDirector(newDirector))
    }

    return(
        <div className='director-post-form-container'>
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
                        placeholder='Director Name'
                        name='Director Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='input-director'>
                    <textarea 
                        className='director-input'
                        type="text"
                        placeholder='A Brief History About Director'
                        name='Brief History'
                        value={briefHistory}
                        onChange={(event) => setBriefHistory(event.target.value)}
                    />
                </div>
                <div className='input-director'>
                    <textarea 
                        className='director-input'
                        type="text"
                        placeholder='Director Accomplishments'
                        name='Accomplishments'
                        value={accomplishments}
                        onChange={(event) => setAccomplishments(event.target.value)}
                    />
                </div>
                <div className='input-director'>
                    <input 
                        className='director-input'
                        type="text"
                        placeholder='Director Birth Date'
                        name='Birth Date'
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
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
                        Submit Director!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostADirector